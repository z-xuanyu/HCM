<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 16:28:26
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 16:28:35
 * @FilePath: \HCM\src\components\common\DarkModeContainer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div
      class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
      :class="inverted ? 'bg-#001428 text-white' : 'bg-white text-#333639'"
    >
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  defineOptions({ name: 'DarkModeContainer' });
  
  interface Props {
    inverted?: boolean;
  }
  
  withDefaults(defineProps<Props>(), {
    inverted: false
  });
  </script>
  
  <style scoped></style>
  