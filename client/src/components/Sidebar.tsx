import React from "react";
import { useAppContext } from "../context/AppContext";

const Sidebar: React.FC = () => {
    const {isSidebarOpen} = useAppContext();
    const navStyles = 'p-1 text-gray-500 hover:bg-primary-light rounded-xs hover:text-gray-800 hover:font-bold hover:bg-primary-light transition-all ease';
  return (
    <aside className={`w-[200px] bg-gray-100 fixed left-0 top-11 px-2 py-4 bottom-8 flex flex-col transition-all ease duration-100
        ${isSidebarOpen ? 'ml-[0px]' : 'ml-[-200px]'}
    `}>
      <div className="mb-2 text-lg font-bold">
        Menu
      </div>
      
      {/* The second div will take the remaining space and scroll if content overflows */}
      <div className="flex-1 overflow-y-auto text-sm">
        <ul>
          <li className={`${navStyles}`}>Dashboard</li>
          <li className={`${navStyles}`}>Settings</li>
          <li className={`${navStyles}`}>Profile</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
