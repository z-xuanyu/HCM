<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 17:29:47
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 首页
-->
<script setup lang="ts">
import GlobalHeader from './components/global-header/index.vue';
</script>

<template>
  <div class="layout-page">
    <GlobalHeader />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">

</style>
