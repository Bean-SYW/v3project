export interface Result {
  code: number
  message: string
  data: object | null
}

export interface UserInfo {
  id: number,
  username: string,
  nickname: string | null,
  email: string | null,
  userPic: string | null,
  createTime: string,
  updateTime: string
}
