import LoadingOrError from '../components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Gallery = lazy(async () => import('views/Gallery'))
const Details = lazy(async () => import('views/Details'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
