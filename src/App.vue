<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-13 15:21:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 16:53:43
 * @FilePath: \HCM\src\App.vue
 * @Description: 主页面
-->
<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui';
import { subscribeStore, useThemeStore } from '/@/store';
import { useGlobalEvents } from '/@/composables';

const theme = useThemeStore();

subscribeStore();
useGlobalEvents();
</script>

<style scoped></style>