'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  app.quit();
});

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    height: 850,
    width: 1200,
    icon: __dirname + "/icons/128.png"
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.focus();
});
