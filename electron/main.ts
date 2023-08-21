/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-13 15:21:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 17:48:20
 * @FilePath: \HCM\electron\main.ts
 * @Description: 主入口文件
 */
import { app, BrowserWindow, Menu, ipcMain } from "electron";
import path from "node:path";
import { checkForUpdate } from "./update";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.openDevTools();

  ipcMain.on("set-title", (event, title) => {
    const webContents = event.sender;
    const winDemo = BrowserWindow.fromWebContents(webContents);
    winDemo!.setTitle(title);
  });

  Menu.setApplicationMenu(null);

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
    // win.loadURL('http://pcvp.visumall.com/?companyid=0510D02D-3A1F-4796-B303-DAAE36394606');
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  win = null;
});

app.whenReady().then(createWindow);

app.on("ready", () => {
  checkForUpdate(win);
});
