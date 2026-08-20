import { Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { WhatsAppButton } from '../../components/whatsapp-button';
import { LocationSection } from '../../components/location-section';
import { GrainOverlay } from '../../components/effects/GrainOverlay';
import { ScrollProgress } from '../../components/effects/ScrollProgress';
import { CursorSpotlight } from '../../components/effects/CursorSpotlight';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const Gallery = lazy(() => import('../../components/gallery').then(m => ({ default: m.Gallery })));
const Testimonials = lazy(() => import('../../components/testimonials').then(m => ({ default: m.Testimonials })));
const BrandsSection = lazy(() => import('../../components/brands-section').then(m => ({ default: m.BrandsSection })));
const ProductGrid = lazy(() => import('../../components/product-grid').then(m => ({ default: m.ProductGrid })));
const HeroSection = lazy(() => import('../../components/sections/HeroSection').then(m => ({ default: m.HeroSection })));
const Navbar = lazy(() => import('../../components/sections/Navbar').then(m => ({ default: m.Navbar })));
const ServicesSection = lazy(() => import('../../components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const TypewriterSection = lazy(() => import('../../components/sections/TypewriterSection').then(m => ({ default: m.TypewriterSection })));

export function AppTaller() {
  const whatsappUrl = buildWhatsAppUrl(BUSINESS_CONFIG.phone, BUSINESS_CONFIG.messages.restoration);

  return (
    <div className="min-h-screen bg-[var(--vintage-paper)]">
      <GrainOverlay />
      <ScrollProgress />
      <CursorSpotlight />
      <Suspense fallback={null}>
        <Navbar />

        <WhatsAppButton phoneNumber={BUSINESS_CONFIG.phone} message={BUSINESS_CONFIG.messages.general} />

        <HeroSection />

        <ServicesSection />

        <TypewriterSection />

        <section id="catalogo">
          <ProductGrid />
        </section>

        <section className="py-20 px-6 bg-[var(--vintage-paper)]">
          <div className="max-w-6xl mx-auto">
            <BrandsSection />
          </div>
        </section>

        <section id="gallery" className="py-20 px-6 bg-[var(--vintage-cream)]">
          <Gallery />
        </section>

        <section className="py-20 px-6 bg-[var(--vintage-paper)]">
          <div className="max-w-6xl mx-auto">
            <Testimonials />
          </div>
        </section>

        <section id="contacto" className="py-20 px-6 bg-[var(--vintage-cream)]">
          <LocationSection />
        </section>

        <section className="py-20 px-6 bg-[var(--vintage-dark)] text-[var(--vintage-cream)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="mb-6 text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ¿Listo para restaurar tu pieza?
            </motion.h2>
            <p className="text-xl text-[var(--vintage-sepia)] mb-8 max-w-2xl mx-auto">
              Cada restauración es única. Contáctanos para discutir tu proyecto y recibir un presupuesto personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-[var(--vintage-gold)] text-[var(--vintage-dark)] rounded hover:bg-[var(--vintage-bronze)] transition-colors cursor-pointer inline-block font-semibold"
              >
                Ver Catálogo
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[var(--vintage-cream)]/50 rounded hover:bg-[var(--vintage-cream)]/10 transition-colors flex items-center justify-center gap-2"
              >
                <span>WhatsApp</span>
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 bg-[var(--vintage-dark)] border-t border-[var(--vintage-bronze)]/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-[var(--vintage-gold)] mb-4 font-bold">
                  Taller Artesanal
                </h3>
                <p className="text-[var(--vintage-sepia)] text-sm">
                  Especializados en joyería artesanal, antigüedades y restauración de máquinas de escribir desde 1987. Ubicados en los locales artesanales del Centro Cultural Gabriela Mistral.
                </p>
              </div>
              <div>
                <h4 className="text-[var(--vintage-cream)] mb-4 font-semibold">Especialidades</h4>
                <ul className="text-[var(--vintage-sepia)] text-sm space-y-2 font-typewriter">
                  <li className="text-[var(--vintage-gold)]">★ Joyería Artesanal</li>
                  <li>Antigüedades</li>
                  <li>Restauración de Máquinas de Escribir</li>
                  <li className="text-[var(--vintage-gold)]">★ Olivetti, Remington, Underwood</li>
                  <li>Olympia, Hermes, Brother</li>
                  <li className="text-xs text-[var(--vintage-metal)] mt-2">+ Smith-Corona, Royal, Adler, Erika</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[var(--vintage-cream)] mb-4 font-semibold">Ubicación y Contacto</h4>
                <ul className="text-[var(--vintage-sepia)] text-sm space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <span>{BUSINESS_CONFIG.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <a href={`https://wa.me/${BUSINESS_CONFIG.phone}`} className="hover:text-[var(--vintage-gold)] transition-colors">
                      +56 9 5409 5465
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-[var(--vintage-gold)]" />
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[var(--vintage-gold)] transition-colors">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[var(--vintage-bronze)]/30 pt-8 text-center text-[var(--vintage-metal)] text-sm">
              <p className="font-typewriter">
                © 2026 Taller Artesanal — GAM. Artesanía con pasión.
              </p>
            </div>
          </div>
        </footer>
      </Suspense>
    </div>
  );
}
