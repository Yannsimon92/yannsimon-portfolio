import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const Projets = lazy(() => import('./pages/Projets'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/projets"
        element={
          <Suspense fallback={null}>
            <Projets />
          </Suspense>
        }
      />
    </Routes>
  )
}
