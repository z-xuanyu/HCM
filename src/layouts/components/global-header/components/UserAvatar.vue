<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-[12px]" :inverted="theme.header.inverted">
      <icon-svg-avatar class="text-[32px]" />
      <span class="pl-[8px] text-[16px] font-medium">阿宇</span>
    </hover-container>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { type DropdownOption } from "naive-ui";
import { useThemeStore } from "/@/store";
import { useIconRender } from "/@/composables";
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { useI18n } from 'vue-i18n';

defineOptions({ name: "UserAvatar" });

const theme = useThemeStore();
const { iconRender } = useIconRender();
const router = useRouter();
const { t } = useI18n();

const options = ref<DropdownOption[]>([]);
watchEffect(() => {
  options.value = [
    {
      label: t("message.userCenter"),
      key: "user-center",
      icon: iconRender({ icon: "carbon:user-avatar" }),
    },
    {
      type: "divider",
      key: "divider",
    },
    {
      label: t("message.logout"),
      key: "logout",
      icon: iconRender({ icon: "carbon:logout" }),
    },
  ];
});

type DropdownKey = "user-center" | "logout";

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;
  if (key === "logout") {
    window.$dialog?.info({
      title: t("message.modal.title"),
      content: t("message.modal.logoutContent"),
      positiveText: t("message.modal.confirm"),
      negativeText: t("message.modal.cancel"),
      onPositiveClick: () => {
        router.push({
          name: "Login",
        });
      },
    });
  }
}
</script>

<style scoped></style>
