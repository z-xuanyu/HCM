<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-13 15:21:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-22 14:02:29
 * @FilePath: \HCM\src\App.vue
 * @Description: 主页面
-->
<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <naive-provider>
      <router-view />
      <n-modal
        v-model:show="showModal"
        :mask-closable="false"
        preset="dialog"
        title="检查到您有新版本更新！"
      >
        <div class="space-y-2 my-4">
          <h3 class="font-bold">更新内容：</h3>
          <p v-for="item in updateList">{{ item }}</p>
        </div>
        <template v-if="percentage">
          <n-progress
            type="line"
            :percentage="percentage"
            :indicator-placement="'inside'"
          />
        </template>
        <!-- 操作按钮 -->
        <template #action>
          <n-space>
            <n-button size="small" @click="showModal = false"
              >以后再说</n-button
            >
            <n-button
              size="small"
              v-if="percentage !== 100"
              :loading="loading"
              type="primary"
              @click="submitCallback"
              >确认下载</n-button
            >
            <n-button
              size="small"
              v-if="percentage == 100"
              type="primary"
              @click="handleUpdateInstall"
              >退出并安装</n-button
            >
          </n-space>
        </template>
      </n-modal>
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { dateZhCN, zhCN } from "naive-ui";
import { subscribeStore, useThemeStore } from "/@/store";
import { useGlobalEvents } from "/@/composables";
import { ref } from "vue";

const theme = useThemeStore();

const showModal = ref(false);
const percentage = ref(0);
const loading = ref(false);
// 更新内容列表
const updateList = ref<string[]>([]);

subscribeStore();
useGlobalEvents();

// 监听到了更新
window.electronAPI.handleUpdateTips((_event: any, list: Array<string>) => {
  showModal.value = true;
  updateList.value = list;
});
// 确认下载
const submitCallback = () => {
  loading.value = true;
  window.electronAPI.handleUpdateConfirm();
};
// 更新进度
window.electronAPI.handleUpdateProgress((_event: any, progress: number) => {
  console.log(progress, "progress");
  percentage.value = progress;
});
// 下载完成
window.electronAPI.handleUpdateComplete(() => {
  loading.value = false;
  percentage.value = 100;
});
// 退出并安装
const handleUpdateInstall = () => {
  window.electronAPI.handleUpdateInstall();
};
</script>

<style scoped></style>
