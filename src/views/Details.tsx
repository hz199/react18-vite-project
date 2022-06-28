import { getUserInfo } from '@/server/user'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function Details() {
  const fetchUserInfo = () => {
    // TODO
    getUserInfo().then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <br />
      <Link to={'/'}>home</Link>
      <br />

      <Button type="primary" onClick={() => fetchUserInfo()}>
        请求接口
      </Button>
    </div>
  )
}

export default Details
