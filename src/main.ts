/*
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-13 15:21:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 17:13:34
 * @FilePath: \HCM\src\main.ts
 * @Description: 入口文件
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from './store';
import { setupI18n } from "./locales/i18n";

function bootstrap() {
  const app = createApp(App);
  // 国际化
  setupI18n(app);
  // 注册路由
  setupRouter(app);
  // 注册 pinia
  setupStore(app);
  app
    .mount("#app")
    .$nextTick(() => postMessage({ payload: "removeLoading" }, "*"));
}

bootstrap();
