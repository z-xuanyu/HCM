<script setup lang="ts">
import { ref } from "vue";
import { useThemeStore } from "/@/store";
import ColorCheckbox from "./ColorCheckbox.vue";
import { traditionColors } from "/@/settings";

const visible = ref(false);
const theme = useThemeStore();
// 关闭
const handleClose = () => {
  visible.value = false;
};

defineOptions({ name: "ToggleTheme" });
</script>

<template>
  <hover-container class="w-[40px] h-full">
    <icon-mdi:color
      class="text-[18px] outline-transparent"
      @click="visible = !visible"
    />
  </hover-container>

  <n-modal
    :show="visible"
    preset="card"
    class="!w-[640px] !h-[560px]"
    :z-index="10001"
    title="主题皮肤切换"
    @close="handleClose"
  >
    <n-grid :cols="12" :x-gap="8" :y-gap="12">
      <n-grid-item
        v-for="color in theme.themeColorList"
        :key="color"
        class="flex-x-center"
      >
        <color-checkbox
          :color="color"
          :checked="color === theme.themeColor"
          @click="theme.setThemeColor(color)"
        />
      </n-grid-item>
    </n-grid>
    <n-space :vertical="true" class="pt-[12px]">
      <n-color-picker
        :value="theme.themeColor"
        :show-alpha="false"
        @update-value="theme.setThemeColor"
      />
    </n-space>
    <!-- 中国配色 -->
    <div class="flex justify-center">
      <n-gradient-text type="primary" :size="24">中国传统颜色</n-gradient-text>
    </div>
    <n-tabs>
      <n-tab-pane
        v-for="item in traditionColors"
        :key="item.label"
        :name="item.label"
        :tab="item.label"
      >
        <n-grid :cols="8" :x-gap="16" :y-gap="8">
          <n-grid-item v-for="i in item.data" :key="i.label">
            <color-checkbox
              class="!w-full !h-36px !rounded-4px"
              :color="i.color"
              :checked="i.color === theme.themeColor"
              icon-class="text-20px"
              @click="theme.setThemeColor(i.color)"
            />
            <p class="text-center">{{ i.label }}</p>
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
    </n-tabs>
  </n-modal>
</template>

<style scoped lang="scss"></style>
