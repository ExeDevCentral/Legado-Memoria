import { Gem, Clock, Type, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { TiltCard } from '../effects/TiltCard'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { BUSINESS_CONFIG } from '../../config/business'

const services = [
  {
    icon: Gem,
    title: 'Artesanías',
    description: 'Joyería fina hecha a mano con técnicas de orfebrería tradicional. Anillos, collares, aros y piezas únicas en oro y plata.',
    cta: 'Consultar artesanías',
    message: '¡Hola! Quiero consultar por sus artesanías en joyería fina.',
  },
  {
    icon: Clock,
    title: 'Antigüedades',
    description: 'Piezas históricas seleccionadas: relojes de bolsillo, cofres victorianos, joyas Art Déco y más objetos de colección.',
    cta: 'Consultar antigüedades',
    message: '¡Hola! Quiero consultar por sus antigüedades disponibles.',
  },
  {
    icon: Type,
    title: 'Restauración de Máquinas de Escribir',
    description: 'Devolvemos la vida a las legendarias Olivetti, Remington, Underwood, Olympia, Hermes y Brother con restauración artesanal completa.',
    cta: 'Solicitar restauración',
    message: '¡Hola! Quiero solicitar la restauración de mi máquina de escribir.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-6 bg-[var(--vintage-paper)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[var(--vintage-bronze)]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase font-typewriter">
                Tres oficios, un legado
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[var(--vintage-dark)] mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto">
              Artesanía en joyería fina, antigüedades con historia y restauración profesional de máquinas de escribir
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const whatsappUrl = buildWhatsAppUrl(BUSINESS_CONFIG.phone, service.message)

            return (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="h-full bg-[var(--vintage-cream)] p-8 rounded-lg border border-[var(--vintage-bronze)]/20 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div>
                    <div
                      className="w-16 h-16 bg-[var(--vintage-gold)]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--vintage-gold)]/30 transition-colors"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <Icon className="w-8 h-8 text-[var(--vintage-bronze)]" />
                    </div>
                    <h3
                      className="text-2xl text-[var(--vintage-dark)] mb-4"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[var(--vintage-metal)] text-sm leading-relaxed mb-6"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-all duration-300 text-sm font-typewriter tracking-wide"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {service.cta}
                  </a>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
