import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projets from './pages/Projets'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets" element={<Projets />} />
    </Routes>
  )
}
