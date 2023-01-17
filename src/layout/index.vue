<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Menu from "./menu/menu.vue";
interface Props {
  name: string;
  count?: number;
}
</script>

<template>
  <div class="common-layout">
    <el-container style="height:100%">
      <el-aside width="200px" style="aside">
        <Menu />
      </el-aside>
      <el-container>
        <el-header style="head">Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped >
.common-layout {
  height: 100vh;
}
:deep(.el-menu) {
  background-color: inherit !important;
  border-color: inherit !important;
}
</style>
