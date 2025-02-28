const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  moveWindow: (offsetX, offsetY, clientX, clientY) => {
    ipcRenderer.send('window:move', { offsetX, offsetY, clientX, clientY });
  },
  stopMove: () => {
    ipcRenderer.send('window:stopMove');
  },
  minimize: () => {
    ipcRenderer.send('window:minimize');
  },
  maximize: () => {
    ipcRenderer.send('window:maximize');
  },
  close: () => {
    ipcRenderer.send('window:close');
  },
});
