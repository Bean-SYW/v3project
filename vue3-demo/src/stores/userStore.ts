import { defineStore } from 'pinia'

interface UserInfo {
  username: string
}

export const userStore = defineStore('userStore', {
  state: () => ({
    userInfo: { username: '' } as UserInfo
  }),
  getters: {
    username: (state) => state.userInfo.username
  },
  actions: {}
})
