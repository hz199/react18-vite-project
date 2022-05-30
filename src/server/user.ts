import axios from '../utils/fetch'

export const getUserInfo = <T = any, K = any>(data?: T) => {
  return axios.get<K>('/api/user', {
    params: data
  })
}
