<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 15:57:17
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 首页
-->
<script setup lang="ts">
import GlobalHeader from "./components/global-header/index.vue";
import GlobalContent from "./components/global-content/index.vue";
</script>

<template>
  <div class="layout-page flex flex-col h-screen overflow-hidden">
    <GlobalHeader />
    <global-content />
  </div>
</template>

<style scoped lang="scss"></style>
