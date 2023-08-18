<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-18 14:42:14
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-18 15:33:19
 * @FilePath: \HCM\src\views\login\components\pwd-login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { FormInst, FormRules } from "naive-ui";
import { reactive, ref } from "vue";

const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  userName: "xuanyu",
  password: "123456",
});
const rememberMe = ref(false);
const loading = ref(false);
const rules: FormRules = {
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur",
  },
};

// 处理登录
async function handleSubmit() {
  await formRef.value?.validate();

  const { userName, password } = model;

  // 登录逻辑
  console.log(userName, password);
}
</script>

<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    size="large"
    :show-label="false"
  >
    <n-form-item path="userName">
      <n-input v-model:value="model.userName" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item path="password">
      <n-input
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        placeholder="请输入密码"
      />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex justify-between items-center">
        <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
        <n-button :text="true">忘记密码？</n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="loading"
        @click="handleSubmit"
      >
        立即登录
      </n-button>
    </n-space>
  </n-form>
</template>

<style scoped lang="scss"></style>
