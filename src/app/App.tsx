import { useState } from 'react';
import { ArrowRight, Gem, Award, Shield, Sparkles, MapPin, Phone, Mail, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageUpload } from './components/image-upload';
import { DiagnosisSection } from './components/diagnosis-section';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { WhatsAppButton } from './components/whatsapp-button';
import { LocationSection } from './components/location-section';
import { BrandsSection } from './components/brands-section';
import { ProductGrid, Product } from './components/product-grid';
import { CartDrawer, CartItem } from './components/cart-drawer';

export default function App() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const phoneNumber = '56954095465';

  const handleImagesSelected = (files: File[]) => {
    setUploadedImages(prev => [...prev, ...files]);
    setShowDiagnosis(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) return prev; // Limit to stock
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleRequestAppraisalWhatsApp = () => {
    const message = `¡Hola! Acabo de subir fotos a su tasador online y me gustaría coordinar una cotización/tasación formal para mi pieza de joyería/antigüedad.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--vintage-paper)] pt-16">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber={phoneNumber} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        phoneNumber={phoneNumber}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--vintage-dark)]/90 backdrop-blur-md border-b border-[var(--vintage-bronze)]/25 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-xl font-bold tracking-widest text-[var(--vintage-gold)] font-typewriter cursor-pointer focus:outline-none"
          >
            AURUM & CO.
          </button>
          <nav className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('productos')}
              className="text-sm font-medium text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors cursor-pointer focus:outline-none"
            >
              Colección
            </button>
            <button
              onClick={() => scrollToSection('tasacion')}
              className="text-sm font-medium text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors cursor-pointer focus:outline-none"
            >
              Tasación
            </button>
            <button
              onClick={() => scrollToSection('restauraciones')}
              className="text-sm font-medium text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors cursor-pointer focus:outline-none"
            >
              Historial
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] transition-colors cursor-pointer focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-typewriter">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--vintage-dark)]/85 via-[var(--vintage-dark)]/50 to-[var(--vintage-paper)] z-10" />
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920"
            alt="Vintage Handcrafted Jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[var(--vintage-gold)]/20 rounded-full" />
          <div className="absolute bottom-40 right-20 w-48 h-48 border border-[var(--vintage-bronze)]/10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[var(--vintage-gold)]/20 backdrop-blur-sm border border-[var(--vintage-gold)]/30 rounded">
              <span className="text-[var(--vintage-cream)] text-sm font-semibold tracking-widest font-typewriter uppercase">
                Joyería Exclusiva & Legado
              </span>
            </div>

            <h1 className="mb-6 text-5xl md:text-7xl text-[var(--vintage-cream)] tracking-tight leading-tight">
              Piezas Únicas,<br />
              Historias Irrepetibles
            </h1>

            <p className="text-lg md:text-xl text-[var(--vintage-sepia)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Colección boutique de aros, anillos y collares hechos a mano junto con una curatoría selecta de antigüedades genuinas con alma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('productos')}
                className="group px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] rounded hover:bg-[var(--vintage-bronze)] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-medium cursor-pointer"
              >
                <span>Ver Colección</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('tasacion')}
                className="px-8 py-4 bg-transparent text-[var(--vintage-cream)] border-2 border-[var(--vintage-cream)]/50 rounded hover:bg-[var(--vintage-cream)]/10 transition-all duration-300 font-medium cursor-pointer"
              >
                Tasar mi Joya
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-[var(--vintage-cream)]/10 pt-8">
              {[
                { number: '100%', label: 'Piezas Certificadas' },
                { number: '35+', label: 'Años de Experiencia' },
                { number: 'Limitado', label: 'Diseño Exclusivo' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl text-[var(--vintage-gold)] mb-1 font-typewriter font-semibold">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[var(--vintage-sepia)] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[var(--vintage-cream)]/50 rounded-full flex justify-center cursor-pointer" onClick={() => scrollToSection('features')}>
            <div className="w-1 h-2 bg-[var(--vintage-cream)]/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[var(--vintage-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl text-[var(--vintage-dark)] font-medium">
              El Arte de la Orfebrería Fina
            </h2>
            <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto text-sm md:text-base">
              Cada creación es tratada como una obra de arte, combinando la precisión técnica de la joyería clásica con un diseño contemporáneo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gem,
                title: 'Diseños de Autor',
                description: 'Piezas exclusivas hechas a mano que no se repiten en masa.'
              },
              {
                icon: Sparkles,
                title: 'Metales Certificados',
                description: 'Utilizamos exclusivamente Plata de Ley 925 y Oro de 18 kilates.'
              },
              {
                icon: Award,
                title: 'Restauración Experta',
                description: 'Especialistas en pulido, ajuste y reconstrucción de joyas familiares.'
              },
              {
                icon: Shield,
                title: 'Herencia Garantizada',
                description: 'Evaluamos y certificamos el valor histórico de nuestras antigüedades.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[var(--vintage-gold)]/20 rounded-full">
                  <feature.icon className="w-7 h-7 text-[var(--vintage-bronze)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--vintage-dark)]">
                  {feature.title}
                </h3>
                <p className="text-xs text-[var(--vintage-metal)] max-w-[240px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <ProductGrid onAddToCart={handleAddToCart} />

      {/* Appraisal / Tasacion Section */}
      <section id="tasacion" className="py-20 px-6 bg-[var(--vintage-paper)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-[var(--vintage-dark)] font-medium">
              Tasación & Diagnóstico de Joyas
            </h2>
            <p className="text-[var(--vintage-metal)] max-w-2xl mx-auto text-sm md:text-base">
              ¿Tienes una joya antigua o rota? Sube fotografías claras de tu pieza (frente, reverso y marcas) para obtener una tasación visual y presupuesto de restauración preliminar.
            </p>
          </div>

          <div className="bg-[var(--vintage-cream)] p-8 md:p-12 rounded-lg border border-[var(--vintage-bronze)]/30 shadow-md">
            <ImageUpload onImagesSelected={handleImagesSelected} />

            {uploadedImages.length > 0 && (
              <div className="mt-12">
                <DiagnosisSection hasImages={uploadedImages.length > 0} />

                <div className="mt-8 text-center border-t border-[var(--vintage-bronze)]/10 pt-8">
                  <button
                    onClick={handleRequestAppraisalWhatsApp}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded font-medium transition-all shadow-md flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Agendar Tasación por WhatsApp</span>
                  </button>
                  <p className="text-xs text-[var(--vintage-metal)] mt-3">
                    Coordinaremos una entrega física o videollamada para certificar tu pieza.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-6 bg-[var(--vintage-paper)] border-t border-[var(--vintage-bronze)]/10">
        <div className="max-w-6xl mx-auto">
          <BrandsSection />
        </div>
      </section>

      {/* Restoration Gallery Section */}
      <section id="restauraciones" className="py-20 px-6 bg-[var(--vintage-cream)]">
        <Gallery />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[var(--vintage-paper)]">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 bg-[var(--vintage-cream)]">
        <LocationSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] border-t border-[var(--vintage-gold)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl md:text-5xl font-medium text-[var(--vintage-gold)]">
            Encuentra o Restaura tu Reliquia
          </h2>
          <p className="text-base md:text-lg text-[var(--vintage-sepia)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Cada joya que vendemos es única y nuestras restauraciones se hacen respetando su integridad histórica. Consúltanos directamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('productos')}
              className="px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] hover:bg-[var(--vintage-cream)] rounded transition-colors font-medium cursor-pointer"
            >
              Comprar Piezas
            </button>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-[var(--vintage-cream)]/50 rounded hover:bg-[var(--vintage-cream)]/10 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <span>Consulta por WhatsApp</span>
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--vintage-dark)] border-t border-[var(--vintage-bronze)]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[var(--vintage-gold)] mb-4 font-semibold text-lg">
                Aurum & Co.
              </h3>
              <p className="text-[var(--vintage-sepia)] text-xs leading-relaxed">
                Taller de orfebrería de autor y galería de antigüedades. Ubicados en los locales artesanales del Centro Cultural Gabriela Mistral (GAM) en Santiago de Chile, restaurando legados desde hace décadas.
              </p>
            </div>
            <div>
              <h4 className="text-[var(--vintage-cream)] mb-4 font-semibold text-sm">Nuestras Categorías</h4>
              <ul className="text-[var(--vintage-sepia)] text-xs space-y-2 font-typewriter">
                <li className="text-[var(--vintage-gold)]">★ Antigüedades Exclusivas</li>
                <li>Anillos de Oro 18k</li>
                <li>Aros de Filigrana</li>
                <li>Collares Barrocos</li>
                <li>Relojes Vintage</li>
                <li>Cofres & Bronces</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[var(--vintage-cream)] mb-4 font-semibold text-sm">Ubicación y Contacto</h4>
              <ul className="text-[var(--vintage-sepia)] text-xs space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--vintage-gold)]" />
                  <span>Locales Artesanales junto al GAM<br />
                  Av. Libertador Bernardo O\'Higgins 227<br />
                  Santiago Centro, Chile</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[var(--vintage-gold)]" />
                  <a href={`https://wa.me/${phoneNumber}`} className="hover:text-[var(--vintage-gold)] transition-colors">
                    +56 9 5409 5465
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-[var(--vintage-gold)]" />
                  <a href="mailto:ventas@aurumco.cl" className="hover:text-[var(--vintage-gold)] transition-colors">
                    ventas@aurumco.cl
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--vintage-bronze)]/20 pt-8 text-center text-[var(--vintage-metal)] text-xs">
            <p className="font-typewriter">
              © 2026 Aurum & Co. Joyería Artesanal y Antigüedades. Elegancia con historia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}