import { Button } from 'antd'
import { Link } from 'react-router-dom'

// https://blog.51cto.com/u_3409716/3031548

function Details() {
  return (
    <div>
      <br />
      <Link to={'/'}>home</Link>
      <br />

      <Button type="primary">请求借口</Button>
    </div>
  )
}

export default Details
