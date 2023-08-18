<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 14:11:43
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { localStg } from "/@/utils";

import { useThemeStore } from '/@/store';

const theme = useThemeStore();

const { t } = useI18n();
const { locale } = useI18n();
const language = ref<I18nType.langType>(localStg.get("lang") || "zh-CN");

// 添加切换英文
const changeLanguage = (lang: I18nType.langType) => {
  language.value = 'en';
  locale.value = 'en';
  localStg.set("lang", lang);
};

// 添加切换中文
const LanguageZh = (lang: I18nType.langType) => {
  language.value = 'zh-CN';
  locale.value = 'zh-CN';
  localStg.set("lang", lang);
};

</script>

<template>
  <div>更新0.0.9版本</div>
  <n-space>
    <n-button type="primary" @click="LanguageZh"> 中文 </n-button>
    <n-button type="info" @click="changeLanguage"> 英文 </n-button>
    <n-button type="success" @click="theme.setDarkMode(true)"> 深色 </n-button>
    <n-button type="warning" @click="theme.setDarkMode(false)"> 浅色 </n-button>
  </n-space>
  <p class="bg-indigo-700 text-white mt-10 text-xl dark:bg-white dark:text-black">{{ t("message.system.title") }}</p>
  <icon-svg-avatar class="text-[200px]"></icon-svg-avatar>
  <icon-svg-empty-data class="text-[200px]"></icon-svg-empty-data>
</template>

<style scoped lang="scss"></style>
