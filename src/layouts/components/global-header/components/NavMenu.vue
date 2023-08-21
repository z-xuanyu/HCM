<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 10:45:14
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 11:41:42
 * @FilePath: \HCM\src\layouts\components\global-header\components\NavMenu.vue
 * @Description: 导航
-->
<script setup lang="ts">
import { MenuOption } from "naive-ui";
import { useIconRender } from "/@/composables";
import { ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router';

const { iconRender } = useIconRender();
const { t } = useI18n();
const router = useRouter();
const activeKey = ref("");

const menuOptions = ref<MenuOption[]>([]);

watchEffect(() => {
  menuOptions.value = [
    {
      label: t("message.menu.talentPool"),
      key: "talent-pool",
      icon: iconRender({ icon: "carbon:user-avatar" }),
    },
    {
      label: t("message.menu.team"),
      key: "team",
      icon: iconRender({ icon: "ri:team-line" }),
    },
    {
      label: t("message.menu.schedule"),
      key: "schedule",
      icon: iconRender({ icon: "akar-icons:schedule" }),
    },
  ];
});


const handleUpdateValue = (key: string) => {
  activeKey.value = key;
  router.push({ path: `/${key}` });
};
</script>

<template>
  <div class="menu">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
      @update:value="handleUpdateValue"
    />
  </div>
</template>

<style scoped lang="scss"></style>
