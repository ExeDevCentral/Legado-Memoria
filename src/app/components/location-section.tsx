import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG } from '../config/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function LocationSection() {
  const whatsappUrl = buildWhatsAppUrl(BUSINESS_CONFIG.phone, 'Hola, me gustaría agendar una visita al taller');

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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] bg-[var(--vintage-dark)] rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5547442644587!2d-70.65382!3d-33.438682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a4f2e2d8cb%3A0x2f5e4c0f1a4e5c0d!2sCentro%20Cultural%20Gabriela%20Mistral!5e0!3m2!1ses!2scl!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Centro Cultural Gabriela Mistral"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          {[
            { icon: MapPin, title: 'Dirección', children: <><p className="text-sm text-[var(--vintage-metal)]">{BUSINESS_CONFIG.address}</p></> },
            { icon: Clock, title: 'Horario de Atención', children: <><p className="text-sm text-[var(--vintage-metal)]">Lunes a Viernes: 10:00 - 19:00<br />Sábados: 10:00 - 14:00<br />Domingos: Cerrado</p><p className="text-xs text-[var(--vintage-bronze)] mt-2">*Se recomienda agendar cita previa</p></> },
            { icon: Phone, title: 'Contacto Directo', children: <><p className="text-sm text-[var(--vintage-metal)] space-y-1"><a href={`https://wa.me/${BUSINESS_CONFIG.phone}`} className="block hover:text-[var(--vintage-bronze)] transition-colors">WhatsApp: +56 9 5409 5465</a><a href={`mailto:${BUSINESS_CONFIG.email}`} className="block hover:text-[var(--vintage-bronze)] transition-colors">{BUSINESS_CONFIG.email}</a></p></> },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]"
              >
                <div className="bg-[var(--vintage-gold)]/20 p-3 rounded">
                  <Icon className="w-6 h-6 text-[var(--vintage-bronze)]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[var(--vintage-dark)]">{item.title}</h3>
                  {item.children}
                </div>
              </motion.div>
            );
          })}

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded hover:bg-[var(--vintage-dark)]/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Agendar Visita por WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
