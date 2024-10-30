import request from './index'

export const onRegister = (params: object) => {
  return request.post('/user/register', params)
}

export const onLogin = (params: object) => {
  return request.post('/user/login', params)
}

export const getUserInfo = () => {
  return request.post('/user/info')
}

export const updateUserInfo = (params: object) => {
  return request.post('/user/update', params)
}

export const getArticleList = () => {
  return request.post('/article/list')
}
