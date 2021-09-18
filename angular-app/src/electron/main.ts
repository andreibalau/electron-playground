import {app, BrowserWindow} from "electron";

export default class Main{

    constructor(){}

    startApp(){
        app.whenReady().then(() => {
            this.createWindow();
        })
    }

    private createWindow(){
        let win = new BrowserWindow({ width: 800, height: 600 });
        win.loadFile("dist/angular-app/index.html");
    }

}
