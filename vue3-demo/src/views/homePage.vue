<script setup lang="ts">
import NavBar from './navBar.vue'
import { getUserInfo } from '@/request/url'


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <NavBar />
      </el-aside>
      <RouterView />
    </el-container>
  </div>
</template>
