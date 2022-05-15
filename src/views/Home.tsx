import { useAppDispatch, useAppSelector } from '../hooks/store'
import { decrement, increment } from '../stores/modules/user'
import { Button } from 'antd'

function Home() {
  const count = useAppSelector((state) => state.user.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button>点击</Button>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Home
