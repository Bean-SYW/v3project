<script setup>
import { ref } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="about">
    <h1 @click="increment">{{ count }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
