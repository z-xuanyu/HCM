/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 16:56:15
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-14 17:11:09
 * @FilePath: \HCM\src\router\index.ts
 * @Description: 路由配置
 */
import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
});


export function setupRouter(app: App) {
    app.use(router);
}