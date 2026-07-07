import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { BUSINESS_CONFIG } from '../../config/business'

const links = [
  { href: '#servicios', label: 'Artesanías' },
  { href: '#antiguedades', label: 'Antigüedades' },
  { href: '#restauracion', label: 'Restauración' },
  { href: '#gallery', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--vintage-dark)]/95 backdrop-blur-md py-2 shadow-lg shadow-[var(--vintage-gold)]/5'
            : 'bg-transparent py-4'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(201,169,97,0.2)' : '1px solid transparent' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-[var(--vintage-gold)] font-typewriter text-lg tracking-wider">
            {BUSINESS_CONFIG.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--vintage-cream)]/80 hover:text-[var(--vintage-gold)] transition-colors font-typewriter tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--vintage-cream)] p-2 cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--vintage-dark)]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors font-typewriter"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
