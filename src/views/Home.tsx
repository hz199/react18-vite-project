import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { decrement, increment } from '../stores/modules/user'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

function Home() {
  const count = useAppSelector((state) => state.user.value)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const [status, setStatus] = useState(true)

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

      <hr style={{ marginTop: 6 }} />
      <Button
        type="ghost"
        onClick={() => {
          setStatus(!status)
          i18n.changeLanguage(status ? 'en' : 'zh') // val入参值为'en'或'zh'
        }}
      >
        切换语言
      </Button>
      <h1>{t('header.home')}</h1>
      <ul>
        <li>{t('home.hot_recommended')}</li>
        <li>{t('home.joint_venture')}</li>
      </ul>
    </div>
  )
}

export default Home
