
const {app, BrowserWindow} = require("electron");
const noble = require('noble');

app.whenReady().then(() => {
    createWindow();
})


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    let a = noble.startScanning();
    console.log(a)

    win.loadFile("index.html");
}
