<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-08-14 17:10:09
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-17 16:48:03
 * @FilePath: \HCM\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">

// 处理点击
const handleClick = () => {
  console.log('点击了')
  window.electronAPI.setTitle('测试')
}

</script>

<template>
  <div>更新0.0.9版本</div>
  <n-button @click="handleClick"> 通知 </n-button>
  <p>656565</p>
</template>

<style scoped lang="scss"></style>
