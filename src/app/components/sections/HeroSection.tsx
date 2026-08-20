import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ParticleField } from '../effects/ParticleField'
import { TypewriterText } from '../effects/TypewriterText'
import { AnimatedCounter } from '../effects/AnimatedCounter'
import { MagneticButton } from '../effects/MagneticButton'
import { useRef, useState, useEffect } from 'react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { BUSINESS_CONFIG } from '../../config/business'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const decorationsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const el = decorationsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.phone,
    '¡Hola! Quiero restaurar mi máquina de escribir. ¿Me pueden dar más información?'
  )

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vintage-dark)]/80 via-[var(--vintage-dark)]/60 to-[var(--vintage-paper)] z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1920&auto=format"
          srcSet="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=480&auto=format 480w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=800&auto=format 800w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1200&auto=format 1200w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=1920&auto=format 1920w"
          sizes="100vw"
          alt="Taller artesanal"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ scale: bgScale }}
        />
      </motion.div>

      <ParticleField />

      <div ref={decorationsRef} className="absolute inset-0 z-10 pointer-events-none">
        {isVisible && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-40 h-40 border-2 border-[var(--vintage-gold)]/15 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-40 right-20 w-64 h-64 border border-[var(--vintage-bronze)]/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            />
          </>
        )}
      </div>

      <motion.div style={{ opacity }} className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[var(--vintage-gold)]/20 backdrop-blur-sm border border-[var(--vintage-gold)]/30 rounded">
            <span className="text-[var(--vintage-cream)] text-sm font-typewriter">
              ARTESANÍAS · ANTIGÜEDADES · MÁQUINAS DE ESCRIBIR
            </span>
          </div>

          <TypewriterText
            text="Tres oficios, un legado"
            speed={60}
            as="h1"
            className="mb-6 text-5xl md:text-7xl text-[var(--vintage-cream)]"
          />

          <p className="text-xl md:text-2xl text-[var(--vintage-sepia)] mb-8 max-w-2xl mx-auto">
            Artesanía en joyería fina, antigüedades con historia y restauración profesional de máquinas de escribir. Un taller donde el pasado cobra vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <MagneticButton onClick={scrollToCatalog}>
              <span className="group px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] rounded hover:bg-[var(--vintage-bronze)] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer">
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>

            <MagneticButton href={whatsappUrl}>
              <span className="px-8 py-4 bg-transparent text-[var(--vintage-cream)] border-2 border-[var(--vintage-cream)]/50 rounded hover:bg-[var(--vintage-cream)]/10 transition-all duration-300 cursor-pointer">
                Restaurar mi Máquina
              </span>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { to: 37, suffix: '+', label: 'Años de Experiencia' },
              { to: 2400, suffix: '+', label: 'Piezas Restauradas' },
              { to: 98, suffix: '%', label: 'Clientes Satisfechos' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl text-[var(--vintage-gold)] mb-1 font-typewriter">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[var(--vintage-sepia)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[var(--vintage-cream)]/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[var(--vintage-gold)] rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
