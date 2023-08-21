<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 11:42:48
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 17:50:58
 * @FilePath: \HCM\src\layouts\components\global-header\index.vue
 * @Description: 头部组件
-->
<script setup lang="ts">
import { useThemeStore } from "/@/store";
import {
  ThemeMode,
  ToggleLang,
  UserAvatar,
  ToggleTheme,
  NavMenu,
} from "./components";
import { useI18n } from "vue-i18n";
defineOptions({ name: "GlobalHeader" });

const theme = useThemeStore();
const { t } = useI18n();
</script>

<template>
  <dark-mode-container
    class="global-header flex items-center justify-between py-2 px-5 dark:bg-gray-800"
    :inverted="theme.header.inverted"
  >
    <div class="font-bold">{{ t("message.system.title") }}</div>
    <nav-menu />
    <div class="flex items-center">
      <!-- <global-search /> -->
      <theme-mode />
      <toggle-theme />
      <toggle-lang />
      <!-- <system-message /> -->
      <user-avatar />
    </div>
  </dark-mode-container>
</template>

<style scoped lang="scss">
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
