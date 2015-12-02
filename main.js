var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/static/dist/index.html');

  if (process.env === 'development') {
    mainWindow.openDevTools();
  }

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
