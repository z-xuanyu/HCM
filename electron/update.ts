/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 15:07:53
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-14 18:10:13
 * @FilePath: \HCM\electron\update.ts
 * @Description: 更新版本
 */
import { autoUpdater } from "electron-updater";
import { BrowserWindow, dialog } from "electron";
import log from "electron-log";
// import path from "path";
// import fs from "fs";

export function checkForUpdate(win: BrowserWindow | null) {

  // 开发环境调试
  // Object.defineProperty(app, "isPackaged", {
  //   get() {
  //     return true;
  //   },
  // });

  // 生成更新文件
  // createUpdateFile();

  const server = "http://192.168.0.123:3000";
  const url = `${server}/public/update/win`;
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
    log.info("有更新");
    dialog
      .showMessageBox({
        type: "info",
        title: "软件更新",
        message: "发现新版本, 确定更新?",
        buttons: ["确定", "取消"],
      })
      .then((resp) => {
        if (resp.response == 0) {
          autoUpdater.downloadUpdate();
        }
      });
  });

  // 下载进度条
  autoUpdater.on("download-progress", (progressObj) => {
    log.info(progressObj, "下载进度");
    win?.setProgressBar(progressObj.percent / 100);
  });

  // 更新下载
  autoUpdater.on("update-downloaded", (res) => {
    log.info("下载完成");
    console.log(res);
    const dialogOpts: any = {
      type: "info",
      buttons: ["重新启动", "取消"],
      title: "Application Update",
      message: "下载完成",
      detail:
        "A new version has been downloaded. Restart the application to apply the updates.",
    };

    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall();
    });
  });

  autoUpdater.on("error", (message) => {
    console.error("There was a problem updating the application");
    console.error(message);
  });
}

// 创建更新 app-update.yml文件 函数
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
