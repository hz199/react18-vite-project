import axios from 'axios'

export interface ResponseData<T = any> {
  code: number
  result: T
}

const fetch = axios.create({
  baseURL: '/'
})

// 添加请求拦截器
fetch.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
fetch.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default fetch
