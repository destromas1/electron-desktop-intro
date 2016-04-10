var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 700,
    height: 500
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});