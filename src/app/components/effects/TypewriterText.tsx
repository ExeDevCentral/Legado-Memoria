import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TypewriterText({ text, speed = 50, className = '', as: Tag = 'h1' }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    setDisplayed('')
    const interval = setInterval(() => {
      index++
      setDisplayed(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <Tag className={className}>
      {displayed}
      <span className={`inline-block w-[3px] h-[1em] bg-[var(--vintage-gold)] ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </Tag>
  )
}
