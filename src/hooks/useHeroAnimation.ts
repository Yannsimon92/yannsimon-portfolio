import { useEffect, RefObject } from 'react'
import * as THREE from 'three'

export function useHeroAnimation(canvasRef: RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const pl1 = new THREE.PointLight(0x2563eb, 1, 100)
    pl1.position.set(10, 10, 10)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0xdc2626, 0.5, 100)
    pl2.position.set(-10, -10, -10)
    scene.add(pl2)

    const mat = new THREE.MeshPhongMaterial({
      color: 0x0a0f1e,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    })
    const meshes: THREE.Mesh[] = []

    const torus = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.4, 16, 32), mat)
    torus.position.set(-2, 1, 0)
    meshes.push(torus)
    scene.add(torus)

    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), mat)
    ico.position.set(2, -1, -2)
    meshes.push(ico)
    scene.add(ico)

    const octa = new THREE.Mesh(new THREE.OctahedronGeometry(0.8, 0), mat)
    octa.position.set(0, -2, -1)
    meshes.push(octa)
    scene.add(octa)

    const pGeo = new THREE.BufferGeometry()
    const pos = new Float32Array(50 * 3)
    for (let i = 0; i < 50; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x2563eb,
        size: 0.03,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6,
      }),
    )
    scene.add(particles)

    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    const onVisibility = () => {
      if (document.hidden) clock.stop()
      else clock.start()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    const clock = new THREE.Clock()
    let rafId: number

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      meshes.forEach((m, i) => {
        m.rotation.x = t * 0.1 * (i + 1) * 0.5
        m.rotation.y = t * 0.1 * (i + 1) * 0.3
      })
      particles.rotation.y = t * 0.05
      mouse.x += (target.x - mouse.x) * 0.05
      mouse.y += (target.y - mouse.y) * 0.05
      camera.position.x = mouse.x * 0.5
      camera.position.y = mouse.y * 0.5
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      renderer.dispose()
    }
  }, [canvasRef])
}
