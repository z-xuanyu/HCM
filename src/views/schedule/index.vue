<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 11:30:28
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 17:52:47
 * @FilePath: \HCM\src\views\schedule\index.vue
 * @Description: 我的日程
-->
<script setup lang="ts">
import { ref } from 'vue';
import { isYesterday, addDays } from "date-fns/esm";
import { useMessage } from "naive-ui";

const message = useMessage();

const value = ref(addDays(Date.now(), 1).valueOf())

const isDateDisabled = (timestamp: number) => {
  if (isYesterday(timestamp)) {
    return true;
  }
  return false;
};

const handleUpdateValue = (
  _: number,
  { year, month, date }: { year: number; month: number; date: number }
) => {
  message.success(`${year}-${month}-${date}`);
};
</script>

<template>
  <div class="schedule-page">
    <n-calendar
      v-model:value="value"
      #="{ year, month, date }"
      :is-date-disabled="isDateDisabled"
      @update:value="handleUpdateValue"
    >
      {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
  </div>
</template>

<style scoped lang="scss"></style>
