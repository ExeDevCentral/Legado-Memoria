import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  piece: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Valentina Larraín',
    role: 'Coleccionista de Antigüedades',
    piece: 'Anillo de Compromiso Art Déco (1930)',
    quote: 'Encontré el anillo de mis sueños en su tienda. La atención personalizada y la historia del origen de la pieza me cautivaron por completo. Es una verdadera obra de arte en mi mano.'
  },
  {
    name: 'Andrés Cox',
    role: 'Cliente Frecuente',
    piece: 'Reloj de Bolsillo de Oro (Siglo XIX)',
    quote: 'Compré un reloj de bolsillo suizo para un regalo especial. Llegó impecable, funcionando a la perfección y con un certificado de autenticidad detallado. Un servicio excepcional.'
  },
  {
    name: 'Isabel Ossa',
    role: 'Restauración de Joyas',
    piece: 'Aros de Filigrana Familiar',
    quote: 'Llevé a restaurar unos aros de oro heredados de mi abuela que estaban muy desgastados. El trabajo de orfebrería fue soberbio; reforzaron el cierre y devolvieron el brillo original.'
  }
];

export function Testimonials() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="mb-2 text-[var(--vintage-dark)] text-3xl md:text-4xl font-medium">
          Testimonios de Clientes
        </h2>
        <p className="text-[var(--vintage-metal)] text-sm md:text-base">
          Experiencias de quienes ya poseen una de nuestras piezas únicas
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--vintage-cream)] p-6 rounded border border-[var(--vintage-bronze)]/20 relative shadow-sm"
          >
            <Quote className="w-8 h-8 text-[var(--vintage-bronze)]/20 mb-4" />

            <p className="text-[var(--vintage-dark)]/90 mb-6 italic text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>

            <div className="border-t border-[var(--vintage-bronze)]/20 pt-4">
              <h4 className="text-[var(--vintage-dark)] font-semibold text-sm">
                {testimonial.name}
              </h4>
              <p className="text-xs text-[var(--vintage-metal)]">
                {testimonial.role}
              </p>
              <p className="text-[10px] text-[var(--vintage-bronze)] mt-2 font-typewriter tracking-wider uppercase font-semibold">
                {testimonial.piece}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
