<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 11:42:48
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 17:33:02
 * @FilePath: \HCM\src\layouts\components\global-header\index.vue
 * @Description: 头部组件
-->
<script setup lang="ts">
import { useThemeStore } from "/@/store";
import { ThemeMode, ToggleLang, UserAvatar } from "./components";

defineOptions({ name: "GlobalHeader" });

const theme = useThemeStore();
</script>

<template>
  <dark-mode-container
    class="global-header flex items-center justify-between h-full px-5"
    :inverted="theme.header.inverted"
  > 
    <div>log</div>
    <div class="nav">导航</div>
    <div class="flex items-center">
      <!-- <global-search /> -->
      <theme-mode />
      <toggle-lang />
      <!-- <system-message /> -->
      <user-avatar />
    </div>
  </dark-mode-container>
</template>

<style scoped lang="scss">
.global-header {
  height: 56px;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
