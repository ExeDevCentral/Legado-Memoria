import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  rotation: number
}

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!mq.matches || prefersReduced) return

    const count = 40
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      rotation: Math.random() * 360,
    }))

    let animationId: number
    const animate = () => {
      particlesRef.current.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = 100
        if (p.x > 100) p.x = 0
        if (p.y < 0) p.y = 100
        if (p.y > 100) p.y = 0
      })
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particlesRef.current.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[var(--vintage-gold)] rounded-full"
          style={{
            left: `${_.x}%`,
            top: `${_.y}%`,
            width: _.size * 2,
            height: _.size * 2,
            opacity: _.opacity,
            rotate: _.rotation,
          }}
          animate={{
            x: [0, 5, -5, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
