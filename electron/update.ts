/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 15:07:53
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-23 18:03:47
 * @FilePath: \HCM\electron\update.ts
 * @Description: 更新版本
 */
import { autoUpdater } from "electron-updater";
import { BrowserWindow, app, ipcMain } from "electron";
import log from "electron-log";
import path from "path";
import fs from "fs";

export function checkForUpdate(win: BrowserWindow | null) {
  // if (process.env.NODE_ENV === "development") {
  //   // 开发环境调试
  //   Object.defineProperty(app, "isPackaged", {
  //     get() {
  //       return true;
  //     },
  //   });
  //   // 生成更新文件
  //   createUpdateFile();
  // }
  const server = "https://update.zhouxuanyu.com";
  let url: string = "";

  // macos
  if (process.platform == "darwin") {
    url = `${server}/public/update/darwin`;
  }
  // windows
  if (process.platform == "win32") {
    url = `${server}/public/update/win32`;
  }
  // linux
  if (process.platform == "linux") {
    url = `${server}/public/update/linux`;
  }

  autoUpdater.autoDownload = false;
  autoUpdater.setFeedURL(url);
  autoUpdater.checkForUpdates();

  // 版本更信息
  autoUpdater.on("checking-for-update", function () {
    log.info("获取版本信息:");
  });

  // update-not-available
  autoUpdater.on("update-not-available", function () {
    log.info("没有更新");
  });

  //update-available
  autoUpdater.on("update-available", function () {
    setTimeout(() => {
      win!.webContents.send("update-tips", [
        "1.修复了一些bug, 体验更流畅;",
        "2.添加导入资料功能;",
      ]);
    }, 1000);
  });
  // 下载进度条
  autoUpdater.on("download-progress", (progressObj) => {
    win!.webContents.send("update-progress", progressObj.percent);
  });
  // 更新下载完成
  autoUpdater.on("update-downloaded", () => {
    win!.webContents.send("update-complete");
  });

  // 更新错误
  autoUpdater.on("error", (message) => {
    console.error(message);
  });

  // 确认更新
  ipcMain.on("update-confirm", () => {
    autoUpdater.downloadUpdate();
  });

  // 退出并安装
  ipcMain.on("update-install", () => {
    console.log(545454);
    autoUpdater.quitAndInstall();
  });
}

// 开发环境调试 创建更新 app-update.yml文件 函数
// function createUpdateFile() {
//   let yaml = "";

//   yaml += "provider: generic\n";
//   yaml += "url: http://192.168.0.123:3000/public/update/win\n";
//   yaml += "useMultipleRangeRequest: false\n";
//   yaml += "channel: latest\n";
//   yaml += "updaterCacheDirName: " + app.getName();

//   let update_file = [path.join(process.resourcesPath, "app-update.yml"), yaml];
//   let dev_update_file = [
//     path.join(process.resourcesPath, "dev-app-update.yml"),
//     yaml,
//   ];
//   let chechFiles = [update_file, dev_update_file];

//   for (let file of chechFiles) {
//     if (!fs.existsSync(file[0])) {
//       fs.writeFileSync(file[0], file[1]);
//     }
//   }
// }
