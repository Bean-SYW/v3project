<template>
    <MainContent hiddenHeader>

        user
    </MainContent>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/userStore'
import { getUserInfo } from '@/request/url'


const store = userStore()
store.userInfo.username = "22222";
console.log(store.userInfo)

getUserInfo()

</script>

<style scoped></style>