<script setup lang="ts">
import Nav from './nav.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Nav /></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><RouterView /></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
