const { app, BrowserWindow, globalShortcut, screen } = require('electron');
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
  const toggleShortcut = 'Control+Super+H';
  globalShortcut.register(toggleShortcut, () => {
    if (!win) return;
    if (win.isVisible()) {
      win.hide();
    } else {
      const pos = screen.getCursorScreenPoint();
      win.setPosition(pos.x - 150, pos.y - 150); // center around cursor
      win.show();
      win.focus();
    }
  });

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
