<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-13 15:21:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-14 17:22:24
 * @FilePath: \HCM\src\App.vue
 * @Description: 主页
-->
<script setup lang="ts">
import { GlobalThemeOverrides  } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';


const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#FF0000'
    },
    Button: {
      textColor: '#FF0000'
    }
  }
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped></style>
