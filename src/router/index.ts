/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 16:56:15
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 16:12:50
 * @FilePath: \HCM\src\router\index.ts
 * @Description: 路由配置
 */
import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/layout",
    name: "Layout",
    component: () => import("/@/layouts/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/",
    name: "Login",
    component: () => import("/@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  // 匹配无效路径的路由
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("/@/views/exception/404/index.vue"),
    meta: {
      title: "未找到",
    },
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
