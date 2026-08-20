import { useState, useMemo } from 'react';
import { Search, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from './effects/TiltCard';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';
import { products } from '../data/products';
export type { Product } from '../data/products';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'artesanias', name: 'Artesanías' },
    { id: 'antiguedades', name: 'Antigüedades' },
    { id: 'maquinas', name: 'Máquinas' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsApp = (product: { name: string; description: string }) => {
    const message = `¡Hola! Me interesa "${product.name}" - ${product.description}. ¿Me puedes dar más información?`;
    window.open(buildWhatsAppUrl(BUSINESS_CONFIG.phone, message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="antiguedades" className="py-20 px-6 bg-[var(--vintage-paper)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-[var(--vintage-bronze)]">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase font-typewriter">
              Catálogo Exclusivo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--vintage-dark)] mb-4">
            Nuestras Piezas Seleccionadas
          </h2>
          <p className="text-[var(--vintage-metal)] max-w-xl mx-auto">
            Artesanías, antigüedades y máquinas de escribir restauradas. Cada pieza cuenta una historia única.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded text-sm transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-[var(--vintage-dark)] text-[var(--vintage-cream)] shadow-md'
                    : 'bg-[var(--vintage-cream)] text-[var(--vintage-dark)] border border-[var(--vintage-bronze)]/30 hover:border-[var(--vintage-bronze)]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar pieza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--vintage-cream)] border border-[var(--vintage-bronze)]/30 rounded focus:border-[var(--vintage-gold)] focus:outline-none text-[var(--vintage-dark)] text-sm"
            />
            <Search className="w-4 h-4 text-[var(--vintage-metal)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-[var(--vintage-cream)] rounded border border-[var(--vintage-bronze)]/20"
            >
              <p className="text-[var(--vintage-metal)] text-lg">
                No encontramos piezas que coincidan con tu búsqueda.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <TiltCard key={product.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-[var(--vintage-cream)] rounded-lg overflow-hidden border border-[var(--vintage-bronze)]/20 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-neutral-100">
                      <img
                        src={`${product.image}?auto=format`}
                        srcSet={`${product.image}?w=300&auto=format 300w, ${product.image}?w=600&auto=format 600w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        alt={product.name}
                        width={600}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] text-xs px-2.5 py-1 rounded font-semibold shadow font-typewriter">
                          {product.badge}
                        </span>
                      )}
                      {product.isUnique && (
                        <span className="absolute top-3 right-3 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] text-[10px] px-2 py-0.5 rounded tracking-wider uppercase font-semibold font-typewriter border border-[var(--vintage-gold)]/30">
                          Único
                        </span>
                      )}
                      <div className="absolute inset-0 bg-[var(--vintage-dark)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => handleWhatsApp(product)}
                          className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg cursor-pointer"
                          title="Consultar por WhatsApp"
                        >
                          <MessageCircle className="w-5 h-5" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-[var(--vintage-bronze)] uppercase tracking-wider font-semibold font-typewriter">
                          {product.category === 'artesanias' ? 'Artesanía' : product.category === 'maquinas' ? 'Máquina de Escribir' : 'Antigüedad'}
                        </span>
                        <h3 className="text-lg text-[var(--vintage-dark)] mt-1 mb-2 font-medium line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[var(--vintage-metal)] line-clamp-2 mb-4">
                          {product.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleWhatsApp(product)}
                        className="w-full px-4 py-3 text-xs bg-green-600 text-white hover:bg-green-700 rounded transition-all duration-300 flex items-center justify-center gap-2 font-medium cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" fill="currentColor" />
                        Consultar por WhatsApp
                      </button>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
