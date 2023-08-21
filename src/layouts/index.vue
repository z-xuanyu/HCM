<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 10:25:12
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 首页
-->
<script setup lang="ts">
import GlobalHeader from "./components/global-header/index.vue";
</script>

<template>
  <div class="layout-page">
    <GlobalHeader />
    <router-view></router-view>
    <n-button type="primary"> 测试按钮 </n-button>
  </div>
</template>

<style scoped lang="scss"></style>
