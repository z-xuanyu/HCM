<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 11:46:43
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 15:29:31
 * @FilePath: \HCM\src\views\login\index.vue
 * @Description: 登录界面
-->
<script setup lang="ts">
import { computed, type Component } from 'vue';
import { useThemeStore } from '/@/store';
import { loginModuleLabels } from '/@/constants';
import { BindWechat, LoginBg, CodeLogin, PwdLogin, Register, ResetPwd } from './components';
import { getColorPalette, mixColor } from '/@/utils';

const theme = useThemeStore();

interface Props {
  /** 登录模块分类 */
  module: UnionKey.LoginModule;
}

const props = defineProps<Props>();

// 登录模式类型
interface LoginModule {
  key: UnionKey.LoginModule;
  label: string;
  component: Component;
}

// 登录模式
const modules: LoginModule[] = [
  { key: 'pwd-login', label: loginModuleLabels['pwd-login'], component: PwdLogin },
  { key: 'code-login', label: loginModuleLabels['code-login'], component: CodeLogin },
  { key: 'register', label: loginModuleLabels.register, component: Register },
  { key: 'reset-pwd', label: loginModuleLabels['reset-pwd'], component: ResetPwd },
  { key: 'bind-wechat', label: loginModuleLabels['bind-wechat'], component: BindWechat }
];


const activeModule = computed(() => {
  const active: LoginModule = { ...modules[0] };
  const findItem = modules.find(item => item.key === props.module);
  if (findItem) {
    Object.assign(active, findItem);
  }
  return active;
});


const bgThemeColor = computed(() => (theme.darkMode ? getColorPalette(theme.themeColor, 7) : theme.themeColor));

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = theme.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, theme.themeColor, ratio);
});
</script>

<template>
  <div class="w-full relative overflow-hidden h-screen" :style="{ backgroundColor: bgColor }">
    <dark-mode-switch
      :dark="theme.darkMode"
      class="absolute left-[48px] top-[24px] z-10 text-[20px]"
      @update:dark="theme.setDarkMode"
    />
    <n-card :bordered="false" size="large" class="z-4 !w-[420px] mx-auto !rounded-lg absolute z-10 top-1/2 -translate-y-1/2 !shadow-sm">
      <div class="w-full">
        <main class="pt-[24px]">
          <h3 class="text-[18px] text-primary font-medium">{{ activeModule.label }}</h3>
          <div class="pt-[24px]">
            <transition name="fade-slide" mode="out-in" appear>
              <component :is="activeModule.component" />
            </transition>
          </div>
        </main>
      </div>
    </n-card>
    <login-bg :theme-color="bgThemeColor" />
  </div>
</template>

<style scoped lang="scss"></style>
