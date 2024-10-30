import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserInfo } from '@/customer-module/global'

export const userStore = defineStore('userStore', () => {
  const userInfo = ref<UserInfo>({
    id: 0,
    username: "",
    nickname: "",
    email: "",
    userPic: "",
    createTime: "",
    updateTime: ""
  });

  const username = computed(() => userInfo.value?.username)
  const nickname = computed(() => userInfo.value?.nickname)
  const email = computed(() => userInfo.value?.email)
  const id = computed(() => userInfo.value?.id)

  return { userInfo, username, nickname, email, id }
})
