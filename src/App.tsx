import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projets from './pages/Projets'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  )
}
