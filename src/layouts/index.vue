<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 17:43:27
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 首页
-->
<script setup lang="ts">
import GlobalHeader from "./components/global-header/index.vue";
import GlobalContent from "./components/global-content/index.vue";
</script>

<template>
  <div class="layout-page flex flex-col h-screen">
    <GlobalHeader />
    <global-content />
  </div>
</template>

<style lang="scss">
.layout-page{
  @include scrollbar(8px, #e1e1e1);
}
</style>
