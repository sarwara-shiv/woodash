import React, { useRef, useEffect, useCallback } from 'react';
import packageJson from '../../package.json'; // Import the version from package.json
import { IoMdClose } from "react-icons/io";
import { VscChromeMaximize } from "react-icons/vsc";
import { MdMinimize } from "react-icons/md";
import LanguageSelector from './LanguageSelector';

interface MenuBarProps {
  title: string;
}

const TopMenuBar: React.FC = () => {
  const menuBarRef = useRef<HTMLDivElement>(null);
  let isDragging = useRef(false);
  let offsetX = useRef(0);
  let offsetY = useRef(0);
  let lastMoveTime = useRef(0);  // To throttle the move updates

  const commonStyles = 'w-6 h-6 flex hover:bg-white justify-center items-center transition-all ease hover:text-primary'

  // Window control functions
  const handleMinimize = () => {
    (window as any).electron.minimize(); // Electron minimize function
  };

  const handleMaximize = () => {
    (window as any).electron.maximize(); // Electron maximize function
  };

  const handleClose = () => {
    (window as any).electron.close(); // Electron close function
  };

  // Drag functionality - Make the Top Menu Bar draggable
  const onMouseDown = useCallback((e: MouseEvent) => {
    if (menuBarRef.current) {
      isDragging.current = true;
      offsetX.current = e.clientX - menuBarRef.current.getBoundingClientRect().left;
      offsetY.current = e.clientY - menuBarRef.current.getBoundingClientRect().top;

      // Disable text selection while dragging
      document.body.style.userSelect = 'none';

      // Inform main process that dragging has started
      (window as any).electron.moveWindow(offsetX.current, offsetY.current, e.clientX, e.clientY);
    }
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current && menuBarRef.current) {
      const now = Date.now();

      // Throttle the movement (only update once every 16ms, which is roughly 60fps)
      if (now - lastMoveTime.current > 16) {
        lastMoveTime.current = now;

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
          (window as any).electron.moveWindow(offsetX.current, offsetY.current, e.clientX, e.clientY);
        });
      }
    }
  }, []);

  const onMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.userSelect = ''; // Re-enable text selection

      // Inform main process that dragging has stopped
      (window as any).electron.stopMove();
    }
  }, []);

  useEffect(() => {
    const menuBar = menuBarRef.current;

    if (menuBar) {
      menuBar.addEventListener('mousedown', onMouseDown as EventListener);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Cleanup on component unmount
    return () => {
      if (menuBar) {
        menuBar.removeEventListener('mousedown', onMouseDown as EventListener);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseDown, onMouseMove, onMouseUp]);

  return (
    <div
      ref={menuBarRef}
      className="flex items-center justify-between bg-gray-200 text-gray-800 p-2 sticky top-0 z-50 cursor-move"
    >
      {/* Left section: Title and Version */}
      <div className="flex items-center space-x-2 flex-row">
        <div className='flex items-center flex-row space-x-2'>
            <h1 className="text-lg font-semibold text-primary">{process.env.REACT_APP_NAME} </h1>
            <span className="text-sm opacity-70">v{packageJson.version}</span>
        </div>
        {/* <div>|</div>
        <h1 className="text-lg font-semibold">{title}</h1> */}
      </div>

      {/* Right section: Open, Minimize, Maximize, Close */}
      <div className="flex space-x-1">
        <div className='mr-2'>
            <LanguageSelector />
        </div>
        <button
          onClick={handleMinimize}
          className={`${commonStyles}`}
        >
          <span className="text-xs"><MdMinimize/></span>
        </button>
        <button
          onClick={handleMaximize}
          className={`${commonStyles}`}
        >
          <span className="text-xs"><VscChromeMaximize /></span>
        </button>
        <button
          onClick={handleClose}
          className={`${commonStyles}`}
        >
          <span className="text-xs"><IoMdClose /> </span>
        </button>
      </div>
    </div>
  );
};

export default TopMenuBar;
