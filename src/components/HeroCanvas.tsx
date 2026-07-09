import { useRef } from 'react'
import { useHeroAnimation } from '../hooks/useHeroAnimation'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useHeroAnimation(canvasRef)

  return <canvas className="hero-canvas" ref={canvasRef}></canvas>
}
