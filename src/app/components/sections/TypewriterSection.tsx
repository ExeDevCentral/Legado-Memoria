import { motion } from 'motion/react'
import { TypewriterText } from '../effects/TypewriterText'
import { Settings2, Wrench, Watch, Sparkles, Shield } from 'lucide-react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { BUSINESS_CONFIG } from '../../config/business'

const services = [
  { icon: Settings2, label: 'Diagnóstico completo del estado mecánico' },
  { icon: Wrench, label: 'Desmontaje y limpieza ultrasónica de todas las piezas' },
  { icon: Watch, label: 'Ajuste fino de mecanismo de tecleo y carro' },
  { icon: Sparkles, label: 'Restauración estética y pulido de la carcasa' },
  { icon: Shield, label: 'Garantía de 2 años en toda restauración' },
]

export function TypewriterSection() {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_CONFIG.phone,
    '¡Hola! Quiero restaurar mi máquina de escribir. ¿Me pueden dar más información?'
  )

  return (
    <section id="restauracion" className="py-20 px-6 bg-[var(--vintage-dark)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-[var(--vintage-gold)]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=800&auto=format"
                srcSet="https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=400&auto=format 400w, https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=800&auto=format 800w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Máquina de escribir"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[var(--vintage-gold)] text-sm font-typewriter tracking-widest uppercase mb-2 block">
              Restauración Profesional
            </span>
            <TypewriterText
              text="Máquinas de Escribir"
              speed={40}
              as="h2"
              className="text-3xl md:text-5xl text-[var(--vintage-cream)] mb-6"
            />
            <p className="text-[var(--vintage-sepia)] mb-8 leading-relaxed">
              Devolvemos la vida a las legendarias Olivetti, Remington, Underwood, Olympia, Hermes, Brother y Smith-Corona. Cada máquina es desmontada, limpiada, ajustada y calibrada a mano por artesanos especializados.
            </p>

            <div className="space-y-3 mb-8">
              {services.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-3 text-[var(--vintage-cream)]"
                  >
                    <Icon className="w-5 h-5 text-[var(--vintage-gold)] flex-shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] rounded hover:bg-[var(--vintage-bronze)] transition-all duration-300 font-typewriter tracking-wide shadow-lg hover:shadow-xl"
            >
              Quiero restaurar mi máquina de escribir
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
