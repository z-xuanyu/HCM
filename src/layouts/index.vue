<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-17 13:49:37
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 13:52:01
 * @FilePath: \HCM\src\layouts\index.vue
 * @Description: 整体布局
-->
<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui';
</script>

<template>
  <div class="layout-page">
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>

<style scoped lang="scss"></style>
