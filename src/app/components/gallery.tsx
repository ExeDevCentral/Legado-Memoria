import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  before: string;
  after: string;
  model: string;
  year: string;
  description: string;
}

const restorations: GalleryItem[] = [
  {
    before: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800',
    after: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800',
    model: 'Gargantilla de Plata Eduardiana',
    year: 'Circa 1905',
    description: 'Limpieza química especializada para remover oxidación centenaria, soldadura de microeslabones y pulido final de pátina controlada.'
  },
  {
    before: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800',
    after: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
    model: 'Anillo Solitario con Diamante',
    year: 'Década de 1940',
    description: 'Reconstrucción completa de las garras de sujeción desgastadas (re-engaste), pulido por electrólisis y abrillantado del oro amarillo de 18k.'
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const current = restorations[currentIndex];

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % restorations.length);
    setShowBefore(true);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + restorations.length) % restorations.length);
    setShowBefore(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="mb-2 text-[var(--vintage-dark)] text-3xl md:text-4xl">
          Galería de Restauraciones
        </h2>
        <p className="text-[var(--vintage-metal)] text-sm md:text-base">
          Antes y después de nuestro meticuloso trabajo de restauración orfebre
        </p>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/3] bg-[var(--vintage-dark)] rounded-lg overflow-hidden border border-[var(--vintage-bronze)]/20 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={showBefore ? `before-${currentIndex}` : `after-${currentIndex}`}
              src={showBefore ? current.before : current.after}
              alt={showBefore ? 'Antes' : 'Después'}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <div className="absolute top-4 left-4 bg-[var(--vintage-dark)]/85 text-[var(--vintage-cream)] px-4 py-2 rounded backdrop-blur-sm border border-[var(--vintage-gold)]/20">
            <span className="font-typewriter text-xs tracking-wider font-semibold">
              {showBefore ? 'ANTES (Daños / Oxidación)' : 'DESPUÉS (Restaurada)'}
            </span>
          </div>

          <button
            onClick={prevItem}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--vintage-cream)]/90 text-[var(--vintage-dark)] p-3 rounded-full hover:bg-[var(--vintage-gold)] transition-colors shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--vintage-cream)]/90 text-[var(--vintage-dark)] p-3 rounded-full hover:bg-[var(--vintage-gold)] transition-colors shadow-md cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={() => setShowBefore(true)}
            className={`px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              showBefore
                ? 'bg-[var(--vintage-dark)] text-[var(--vintage-cream)] shadow-md'
                : 'bg-[var(--vintage-cream)] text-[var(--vintage-dark)] border border-[var(--vintage-bronze)]/30'
            }`}
          >
            Ver Estado Inicial
          </button>
          <button
            onClick={() => setShowBefore(false)}
            className={`px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              !showBefore
                ? 'bg-[var(--vintage-dark)] text-[var(--vintage-cream)] shadow-md'
                : 'bg-[var(--vintage-cream)] text-[var(--vintage-dark)] border border-[var(--vintage-bronze)]/30'
            }`}
          >
            Ver Resultados
          </button>
        </div>

        <div className="mt-6 p-6 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]/20 shadow">
          <h3 className="mb-1 text-[var(--vintage-dark)] text-xl font-medium">
            {current.model}
          </h3>
          <p className="text-xs text-[var(--vintage-bronze)] mb-3 font-typewriter font-semibold">
            Época / {current.year}
          </p>
          <p className="text-[var(--vintage-metal)] text-sm leading-relaxed">
            {current.description}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {restorations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setShowBefore(true);
              }}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                index === currentIndex
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
