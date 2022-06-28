import { UserInfo } from '@/types/user'
import axios, { ResponseData } from '@/utils/fetch'

export const getUserInfo = <T = any>(data?: T) => {
  return axios.get<ResponseData<UserInfo>>('/api/user', {
    params: data
  })
}
