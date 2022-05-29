import LoadingOrError from '../components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(async () => import('views/Home'))
const Details = lazy(async () => import('views/Details'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
