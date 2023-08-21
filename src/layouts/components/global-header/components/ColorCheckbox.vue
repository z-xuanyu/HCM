<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 10:12:55
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 10:16:31
 * @FilePath: \HCM\src\layouts\components\global-header\components\ColorCheckbox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="flex justify-center items-center w-[20px] h-[20px] rounded-[2px] shadow cursor-pointer" :style="{ backgroundColor: color }">
      <icon-ic-outline-check v-if="checked" :class="[iconClass, isWhite ? 'text-gray-700' : 'text-white']" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  
  defineOptions({ name: 'ColorCheckbox' });
  
  interface Props {
    /** 颜色 */
    color: string;
    /** 是否选中 */
    checked: boolean;
    /** 图标的class */
    iconClass?: string;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    iconClass: 'text-14px'
  });
  
  const whiteColors = ['#ffffff', '#fff', 'rgb(255,255,255)'];
  const isWhite = computed(() => whiteColors.includes(props.color));
  </script>
  
  <style scoped></style>
  