const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(x, y) {
  const size = 300;
  const win = new BrowserWindow({
    width: size,
    height: size,
    x: Math.round(x - size / 2),
    y: Math.round(y - size / 2),
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html');
  win.once('blur', () => win.close());
}

app.whenReady().then(() => {
  const [x, y] = process.argv.slice(2).map(Number);
  createWindow(x || 0, y || 0);
});

app.on('window-all-closed', () => app.quit());
