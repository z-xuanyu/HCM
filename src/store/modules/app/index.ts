/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:03:26
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 14:20:03
 * @FilePath: \HCM\src\store\modules\app.ts
 * @Description: app store
 */
import { defineStore } from "pinia";
import { store } from "/@/store";

export const useAppStore = defineStore({
  id: "hcm-app",
  state: () => ({
    // 侧边栏是否展开
    isSidebarOpen: false,
  }),
});


export function useAppStoreHook() {
    return useAppStore(store);
  }