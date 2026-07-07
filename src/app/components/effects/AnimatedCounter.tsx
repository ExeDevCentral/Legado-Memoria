import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ from = 0, to, suffix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(from + (to - from) * ease))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('es-CL')}{suffix}
    </span>
  )
}
