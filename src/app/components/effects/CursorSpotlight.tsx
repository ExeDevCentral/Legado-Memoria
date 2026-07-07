import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export function CursorSpotlight() {
  const [isDesktop, setIsDesktop] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{ x: springX, y: springY }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-[var(--vintage-gold)] opacity-[0.04] -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  )
}
