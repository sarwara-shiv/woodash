const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });

let mainWindow;
let isMovingWindow = false;
let offsetX = 0;
let offsetY = 0;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth:1000,
    minHeight:700, 
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (process.env.ENV === "development") {
    // Open Developer Tools
  mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../client/build/index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Handle window dragging
  ipcMain.on("window:move", (event, { clientX, clientY, offsetX: ox, offsetY: oy }) => {
    if (!isMovingWindow) {
      offsetX = clientX - mainWindow.getBounds().x;
      offsetY = clientY - mainWindow.getBounds().y;
      isMovingWindow = true;
    }

    const newX = clientX - offsetX;
    const newY = clientY - offsetY;

    // Set the window's new position
    mainWindow.setBounds({
      x: newX,
      y: newY,
      width: mainWindow.getBounds().width,
      height: mainWindow.getBounds().height,
    });
  });

  // Stop moving the window
  ipcMain.on("window:stopMove", () => {
    isMovingWindow = false;
  });
});

// IPC handlers for window control
ipcMain.on('window:minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window:maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on('window:close', () => {
  if (mainWindow) mainWindow.close();
});
