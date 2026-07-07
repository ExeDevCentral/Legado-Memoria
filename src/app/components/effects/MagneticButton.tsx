import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  href?: string
}

export function MagneticButton({ children, onClick, className = '', href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 15 })
  const springY = useSpring(y, { stiffness: 300, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    x.set(distX * 0.2)
    y.set(distY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Tag = href ? 'a' : motion.button

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${className}`}>
            {children}
          </a>
        ) : (
          <button onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  )
}
