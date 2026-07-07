import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

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

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--vintage-cream)] p-8 md:p-10 rounded-lg border border-[var(--vintage-bronze)]/20 relative shadow-sm text-center"
          >
            <Quote className="w-10 h-10 text-[var(--vintage-bronze)]/20 mb-4 mx-auto" />
            <p className="text-[var(--vintage-dark)]/90 mb-6 italic text-base leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Star className="w-4 h-4 text-[var(--vintage-gold)]" fill="currentColor" />
                </motion.div>
              ))}
            </div>
            <div className="border-t border-[var(--vintage-bronze)]/20 pt-4">
              <h4 className="text-[var(--vintage-dark)] font-semibold text-sm">
                {t.name}
              </h4>
              <p className="text-xs text-[var(--vintage-metal)]">
                {t.role}
              </p>
              <p className="text-[10px] text-[var(--vintage-bronze)] mt-2 font-typewriter tracking-wider uppercase font-semibold">
                {t.piece}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                index === current
                  ? 'w-8 bg-[var(--vintage-bronze)]'
                  : 'w-2 bg-[var(--vintage-bronze)]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
