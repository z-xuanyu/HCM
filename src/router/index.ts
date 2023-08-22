/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 16:56:15
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-22 09:55:08
 * @FilePath: \HCM\src\router\index.ts
 * @Description: 路由配置
 */
import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/layout",
    name: "Layout",
    redirect: "/dashboard",
    component: () => import("/@/layouts/index.vue"),
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("/@/views/dashboard/index.vue"),
        meta: {
          title: "工作台",
        },
      },
      {
        path: "/browser",
        name: "Browser",
        component: () => import("/@/views/browser/index.vue"),
        meta: {
          title: "浏览器",
        },
      },
      {
        path: "/talent-pool",
        name: "TalentPool",
        component: () => import("/@/views/talent-pool/index.vue"),
        meta: {
          title: "人才库",
        },
      },
      {
        path: "/team",
        name: "Team",
        component: () => import("/@/views/team/index.vue"),
        meta: {
          title: "团队",
        },
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: () => import("/@/views/schedule/index.vue"),
        meta: {
          title: "日程",
        },
      },
    ],
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
