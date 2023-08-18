<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 18:06:30
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 18:10:16
 * @FilePath: \HCM\src\layouts\components\global-search\components\SearchFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="px-[24px] h-[44px] flex items-center">
    <span class="mr-[14px] flex items-center">
      <icon-mdi-keyboard-return class="icon text-[20px] p-[2px] mr-[6px]" />
      <span>确认</span>
    </span>
    <span class="mr-[14px] flex items-center">
      <icon-mdi-arrow-up-thin class="icon text-[20px] p-[2px] mr-[5px]" />
      <icon-mdi-arrow-down-thin class="icon text-[20px] p-[2px] mr-[6px]" />
      <span>切换</span>
    </span>
    <span class="flex items-center">
      <icon-mdi-keyboard-esc class="icon text-[20px] p-[2px] mr-[6px]" />
      <span>关闭</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "SearchFooter" });
</script>

<style lang="scss" scoped>
.icon {
  box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px #1e235a66;
}
</style>
