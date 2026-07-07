import { useState, useRef, useCallback } from 'react'
import { motion } from 'motion/react'

interface BeforeAfterSliderProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({ before, after, beforeLabel = 'Antes', afterLabel = 'Después' }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg select-none bg-[var(--vintage-dark)]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <img
        src={after}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-[var(--vintage-gold)] cursor-col-resize z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--vintage-gold)] flex items-center justify-center shadow-lg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 3L8 7L4 11" stroke="#2c2416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 3L6 7L10 11" stroke="#2c2416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-[var(--vintage-dark)]/85 text-[var(--vintage-cream)] px-3 py-1.5 rounded text-xs font-typewriter">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-[var(--vintage-dark)]/85 text-[var(--vintage-cream)] px-3 py-1.5 rounded text-xs font-typewriter">
        {afterLabel}
      </div>
    </div>
  )
}
