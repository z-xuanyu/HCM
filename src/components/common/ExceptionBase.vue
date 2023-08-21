<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 16:25:22
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 16:39:11
 * @FilePath: \HCM\src\components\common\ExceptionBase.vue
 * @Description: 错误组件
-->
<template>
  <div class="flex justify-center items-center flex-col gap-[24px] min-h-[520px] w-full h-full overflow-hidden">
    <div class="flex text-[400px] text-primary">
      <icon-svg-no-permission v-if="type === '403'" />
      <icon-svg-not-found v-if="type === '404'" />
      <icon-svg-service-error v-if="type === '500'" />
    </div>
    <router-link :to="{ name: 'Layout' }">
      <n-button type="primary">{{ t('message.exception.backToHome') }}</n-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

defineOptions({ name: "ExceptionBase" });

const { t } = useI18n();

type ExceptionType = "403" | "404" | "500";

interface Props {
  /** 异常类型 403 404 500 */
  type: ExceptionType;
}

defineProps<Props>();
</script>

<style scoped></style>
