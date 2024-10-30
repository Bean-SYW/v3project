<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <slot name="header">
          <UserHeader />
        </slot>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>