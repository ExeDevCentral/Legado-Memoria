import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function LocationSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-[var(--vintage-dark)]">
          Visítanos en Nuestro Taller
        </h2>
        <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto">
          Taller artesanal ubicado junto al Centro Cultural Gabriela Mistral (GAM) en el corazón de Santiago. Agenda tu visita para conocer nuestro proceso de restauración.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Map/Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] bg-[var(--vintage-dark)] rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5547442644587!2d-70.65382!3d-33.438682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a4f2e2d8cb%3A0x2f5e4c0f1a4e5c0d!2sCentro%20Cultural%20Gabriela%20Mistral!5e0!3m2!1ses!2scl!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Centro Cultural Gabriela Mistral"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="flex items-start gap-4 p-4 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]">
            <div className="bg-[var(--vintage-gold)]/20 p-3 rounded">
              <MapPin className="w-6 h-6 text-[var(--vintage-bronze)]" />
            </div>
            <div>
              <h3 className="mb-1 text-[var(--vintage-dark)]">Dirección</h3>
              <p className="text-sm text-[var(--vintage-metal)]">
                Locales Artesanales junto al GAM<br />
                Av. Libertador Bernardo O'Higgins 227<br />
                Santiago Centro, Chile
              </p>
              <p className="text-xs text-[var(--vintage-bronze)] mt-2">
                (Locales del Centro de Artesanos GAM)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]">
            <div className="bg-[var(--vintage-gold)]/20 p-3 rounded">
              <Clock className="w-6 h-6 text-[var(--vintage-bronze)]" />
            </div>
            <div>
              <h3 className="mb-1 text-[var(--vintage-dark)]">Horario de Atención</h3>
              <p className="text-sm text-[var(--vintage-metal)]">
                Lunes a Viernes: 10:00 - 19:00<br />
                Sábados: 10:00 - 14:00<br />
                Domingos: Cerrado
              </p>
              <p className="text-xs text-[var(--vintage-bronze)] mt-2">
                *Se recomienda agendar cita previa
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]">
            <div className="bg-[var(--vintage-gold)]/20 p-3 rounded">
              <Phone className="w-6 h-6 text-[var(--vintage-bronze)]" />
            </div>
            <div>
              <h3 className="mb-1 text-[var(--vintage-dark)]">Contacto Directo</h3>
              <p className="text-sm text-[var(--vintage-metal)] space-y-1">
                <a href="https://wa.me/56954095465" className="block hover:text-[var(--vintage-bronze)] transition-colors">
                  WhatsApp: +56 9 5409 5465
                </a>
                <a href="mailto:Gemacaqueo@gmail.com" className="block hover:text-[var(--vintage-bronze)] transition-colors">
                  Gemacaqueo@gmail.com
                </a>
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/56954095465?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20al%20taller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded hover:bg-[var(--vintage-dark)]/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Agendar Visita por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
