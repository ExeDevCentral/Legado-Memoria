import { motion } from 'motion/react';
import { Star, ShieldCheck, Gem, Award, Truck, HeartHandshake, History, type LucideIcon } from 'lucide-react';
import { guarantees } from '../data/guarantees';

const iconMap: Record<string, LucideIcon> = {
  Gem, History, Award, Truck, Star, ShieldCheck,
};

export function BrandsSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="mb-4 text-[var(--vintage-dark)] text-3xl md:text-4xl font-medium">
          Garantía & Confianza
        </h2>
        <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto text-sm md:text-base">
          Respaldamos cada una de nuestras piezas únicas con estándares excepcionales de calidad y autenticidad.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {guarantees.map((item, index) => {
          const Icon = iconMap[item.icon];
          if (!Icon) return null;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded border flex flex-col justify-between shadow-sm ${
                item.highlight
                  ? 'bg-[var(--vintage-gold)]/10 border-[var(--vintage-gold)] border-2'
                  : 'bg-[var(--vintage-cream)] border-[var(--vintage-bronze)]/30'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${item.highlight ? 'text-[var(--vintage-gold)]' : 'text-[var(--vintage-bronze)]'}`} />
                  <h3 className={`font-semibold text-sm ${
                    item.highlight ? 'text-[var(--vintage-gold)]' : 'text-[var(--vintage-dark)]'
                  }`}>
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--vintage-metal)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded-lg border border-[var(--vintage-gold)]/20 shadow">
        <div className="flex items-start gap-4">
          <HeartHandshake className="w-6 h-6 text-[var(--vintage-gold)] flex-shrink-0 mt-1" />
          <div>
            <h4 className="mb-2 text-[var(--vintage-gold)] font-medium text-lg">
              Compromiso de Sostenibilidad
            </h4>
            <p className="text-xs text-[var(--vintage-sepia)] leading-relaxed">
              Creemos en una joyería ética y consciente. Al adquirir nuestras antigüedades o piezas restauradas, extiendes el ciclo de vida de obras orfebres de enorme valor histórico, reduciendo el impacto ambiental de la minería de metales nuevos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
