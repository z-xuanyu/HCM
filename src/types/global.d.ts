/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-16 17:06:19
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-22 11:22:59
 * @FilePath: \HCM\src\types\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IElectronAPI {
  platform: string;
  setTitle: (title: string) => void;
  handleUpdateTips: (callback: Function) => void;
  handleUpdateProgress: (callback: Function) => void;
  handleUpdateConfirm: () => void;
  handleUpdateComplete: (callback: Function) => void;
  handleUpdateInstall: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
    $loadingBar?: import("naive-ui").LoadingBarProviderInst;
    $dialog?: import("naive-ui").DialogProviderInst;
    $message?: import("naive-ui").MessageProviderInst;
    $notification?: import("naive-ui").NotificationProviderInst;

  }
}

declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void];

  /** 选项数据 */
  type OptionWithKey<K> = { value: K; label: string };
}
