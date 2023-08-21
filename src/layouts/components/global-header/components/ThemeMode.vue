<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 16:44:11
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 11:15:29
 * @FilePath: \HCM\src\layouts\components\global-header\components\ThemeMode.vue
 * @Description: None
-->
<template>
  <hover-container
    class="w-[40px]"
    :inverted="theme.header.inverted"
    tooltip-content="日夜模式切换"
  >
    <dark-mode-switch
      :dark="theme.darkMode"
      class="w-full h-full"
      @update:dark="theme.setDarkMode"
    />
  </hover-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from "/@/store";

defineOptions({ name: "ThemeMode" });

const theme = useThemeStore();
</script>

<style scoped></style>
