import axios, { ResponseData } from '../utils/fetch'
interface UserInfo {
  boolean: boolean
  number: number
  object: object
  string: string
}

export const getUserInfo = <T = any>(data?: T) => {
  return axios.get<ResponseData<UserInfo>>('/api/user', {
    params: data
  })
}
