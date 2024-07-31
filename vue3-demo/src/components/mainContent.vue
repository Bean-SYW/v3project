<template>
  <el-container>
    <template v-if="!hidden">
      <slot name="header">
        <el-header>Header</el-header>
      </slot>
    </template>

    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['hiddenHeader']);

const hidden = ref(props.hiddenHeader || props.hiddenHeader === '');


console.log(props)
</script>

<style scoped></style>