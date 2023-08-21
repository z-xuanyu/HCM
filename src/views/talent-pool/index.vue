<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-21 11:29:01
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-21 17:53:45
 * @FilePath: \HCM\src\views\talent-pool\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="tsx">
import { NImage } from 'naive-ui';
import { reactive } from 'vue';
const columns = [
  {
    title: "照片",
    key: "photo",
    align: "center",
    render: ()=> {
      return (
        <NImage width={60} src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1-129659bb.png'></NImage>
      )
    }
  },
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "电话",
    key: "phone",
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: '标签',
    key: 'tags',
  }
];

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  photo: index,
  name: `Edward King ${index}`,
  phone: '13800138000',
  title: 32,
  email: `81200629${index}@qq.com`,
  tags: `London, Park Lane no. ${index}`,
}));

const pagination = reactive({
  page: 2,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});
</script>

<template>
  <div class="">
    <n-card class="shadow">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" class="flex-1 overflow-y-auto" />
    </n-card>
  </div>
</template>

<style scoped lang="scss"></style>
