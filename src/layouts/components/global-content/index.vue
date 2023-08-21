<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 14:44:38
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 16:05:35
 * @FilePath: \HCM\src\layouts\components\global-content\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view v-slot="{ Component, route }">
    <transition>
      <keep-alive>
        <component
          :is="Component"
          :key="route.fullPath"
          :class="{ 'p-[16px]': showPadding }"
          class=" flex-grow bg-[#f8f7fa] dark:bg-[#101014] overflow-y-auto"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
defineOptions({ name: "GlobalContent" });

interface Props {
  /** 显示padding */
  showPadding?: boolean;
}

withDefaults(defineProps<Props>(), {
  showPadding: true,
});
</script>

<style scoped></style>
