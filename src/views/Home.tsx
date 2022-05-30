import { useAppDispatch, useAppSelector } from '../hooks/store'
import { decrement, increment } from '../stores/modules/user'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function Home() {
  const count = useAppSelector((state) => state.user.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <Link to="/details">
        <Button>点击</Button>
      </Link>
      <div>
        <Button type="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <span>{count}</span>
        <Button type="ghost" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  )
}

export default Home
