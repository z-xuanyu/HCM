<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 16:55:16
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 17:47:07
 * @FilePath: \HCM\src\layouts\components\global-header\components\ToggleLang.vue
 * @Description: 切换语言
-->
<template>
    <hover-container class="w-[40px] h-full">
      <n-dropdown :options="options" trigger="hover" :value="language" @select="handleSelect">
        <icon-cil:language class="text-[18px] outline-transparent" />
      </n-dropdown>
    </hover-container>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { localStg } from '/@/utils';
  
  const { locale } = useI18n();
  
  const language = ref<I18nType.langType>(localStg.get('lang') || 'zh-CN');
  const options = [
    {
      label: '中文',
      key: 'zh-CN'
    },
    {
      label: 'English',
      key: 'en'
    },
  ];
  const handleSelect = (key: string) => {
    language.value = key as I18nType.langType;
    locale.value = key;
    localStg.set('lang', key as I18nType.langType);
  };
  </script>
  <style scoped></style>
  