import axios from 'axios'
import router from '@/router'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.method = config.method || 'post'
    const authorization = localStorage.getItem('Authorization')
    if (authorization) {
      config.headers.Authorization = authorization
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data.code === 0) {
      return response.data
    }
    if (response.data.code === 401) {
      router.push('/login')
    }
    return false
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
