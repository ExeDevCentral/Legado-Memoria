import { useEffect, useRef } from 'react'

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mq = window.matchMedia('(min-width: 768px)')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!mq.matches || prefersReduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let lastFrame = 0
    const interval = 1000 / 30

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const grainSize = 1.5
    const patternSize = 128
    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternSize
    patternCanvas.height = patternSize
    const patternCtx = patternCanvas.getContext('2d')!

    const generateGrain = () => {
      patternCtx.clearRect(0, 0, patternSize, patternSize)
      for (let x = 0; x < patternSize; x += grainSize) {
        for (let y = 0; y < patternSize; y += grainSize) {
          const alpha = Math.random() * 0.08
          patternCtx.fillStyle = `rgba(0,0,0,${alpha})`
          patternCtx.fillRect(x, y, grainSize, grainSize)
        }
      }
    }

    const w = () => canvas.width
    const h = () => canvas.height

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw)
      if (timestamp - lastFrame < interval) return
      lastFrame = timestamp
      generateGrain()
      ctx.clearRect(0, 0, w(), h())
      for (let x = 0; x < w(); x += patternSize) {
        for (let y = 0; y < h(); y += patternSize) {
          ctx.drawImage(patternCanvas, x, y)
        }
      }
    }

    animationId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] opacity-50 hidden md:block"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
