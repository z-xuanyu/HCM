<script setup lang="tsx">
import { NImage } from 'naive-ui';
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
  <div class="overflow-hidden">
    <n-card class="shadow">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" class="flex-1 overflow-y-auto" />
    </n-card>
  </div>
</template>

<style scoped lang="scss"></style>
