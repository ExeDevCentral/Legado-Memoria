import { motion } from 'motion/react';
import { BookOpen, Shield, Award, Landmark, ArrowRight, Sparkles } from 'lucide-react';

export function ArchiveHero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVitrine = () => {
    document.getElementById('vitrina')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#141210] text-[#FAF7F2] border-b-2 border-[#D4AF37]/40 overflow-hidden py-16 md:py-24">
      {/* Background Museum Hall Image with Rich Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/museum-hall.jpg"
          alt="Galería del Museo"
          className="w-full h-full object-cover opacity-25 scale-105 filter blur-[0.8px]"
        />
        {/* Soft Vignette and Spotlight Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-[#141210]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18)_0%,transparent_75%)]" />
      </div>

      {/* Floating Animated Relics on Sides */}
      {/* Left Floating Ceramic Vase */}
      <motion.div
        className="hidden xl:block absolute left-8 top-1/4 z-10 w-48 pointer-events-none"
        animate={{
          y: [0, -18, 0],
          rotateZ: [0, 1.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#D4AF37]/40 to-transparent shadow-2xl backdrop-blur-xs">
          <img
            src="/images/antique-vase.jpg"
            alt="Urna Colonial"
            className="w-full h-auto rounded-xl object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
          />
          <div className="mt-2 text-center">
            <span className="text-[10px] font-cinzel text-[#D4AF37] font-semibold block">
              Urna Barroca (c. 1720)
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Floating Ancient Illuminated Book */}
      <motion.div
        className="hidden xl:block absolute right-8 top-1/3 z-10 w-52 pointer-events-none"
        animate={{
          y: [0, -22, 0],
          rotateZ: [0, -1.8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 1,
          ease: 'easeInOut',
        }}
      >
        <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#D4AF37]/40 to-transparent shadow-2xl backdrop-blur-xs">
          <img
            src="/images/ancient-book.jpg"
            alt="Códice Iluminado"
            className="w-full h-auto rounded-xl object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
          />
          <div className="mt-2 text-center">
            <span className="text-[10px] font-cinzel text-[#D4AF37] font-semibold block">
              Códice Iluminado (1600)
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Center Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Seal Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#1C1814]/90 border-2 border-[#D4AF37]/60 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-cinzel text-xs md:text-sm font-bold tracking-widest text-[#D4AF37] uppercase">
              Archivo Histórico &amp; Patrimonio Cultural de Chile
            </span>
          </motion.div>

          {/* Main Dignified Title with Golden Typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-[#FAF7F2] tracking-tight leading-[1.12] mb-6"
          >
            Custodia, Memoria <br />
            <span className="bg-gradient-to-r from-[#F6E27A] via-[#D4AF37] to-[#AA771C] bg-clip-text text-transparent italic font-cormorant font-normal">
              &amp; Donación Museográfica
            </span>
          </motion.h1>

          {/* Subtitle / Philanthropic Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl font-serif text-[#D8C7A5] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Fondo documental, bibliográfico y artístico de alto valor (Siglos XVII al XX). Una vida consagrada al rescate patrimonial para su entrega definitiva y gratuita a los museos de Chile.
          </motion.p>

          {/* Action Buttons: Highly Premium, Museum Grade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToVitrine}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#12100E] hover:from-[#E5C158] hover:to-[#C59B27] rounded-md font-cinzel font-bold text-base tracking-wide transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#12100E]" />
              <span>Explorar Vitrina 3D Interactiva</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToCatalog}
              className="w-full sm:w-auto px-8 py-4 bg-[#1C1814]/90 text-[#FAF7F2] hover:bg-[#2A241E] border-2 border-[#D4AF37]/60 rounded-md font-cinzel font-semibold text-base tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <BookOpen className="w-5 h-5 text-[#D4AF37]" />
              <span>Ver Catálogo Completo</span>
            </button>
          </motion.div>

          {/* 3 Pillars of Prestige with Golden Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#D4AF37]/30 text-left">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#1C1814]/90 p-6 rounded-xl border border-[#D4AF37]/40 shadow-xl backdrop-blur-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2A241E] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#FAF7F2] mb-1">
                Piezas de Rango Museo
              </h2>
              <p className="text-xs font-serif text-[#D8C7A5] leading-relaxed">
                Incunables, códices en vitela con pan de oro, jarrones barrocos coloniales y lienzos de los grandes maestros chilenos.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#1C1814]/90 p-6 rounded-xl border border-[#D4AF37]/40 shadow-xl backdrop-blur-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2A241E] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#FAF7F2] mb-1">
                Conservación Museográfica
              </h2>
              <p className="text-xs font-serif text-[#D8C7A5] leading-relaxed">
                Desacidificación de papel de trapo, estabilización de pigmentos minerales y pasivación de metales nobles.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#1C1814]/90 p-6 rounded-xl border border-[#D4AF37]/40 shadow-xl backdrop-blur-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2A241E] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#FAF7F2] mb-1">
                Donación Pública y Gratuita
              </h2>
              <p className="text-xs font-serif text-[#D8C7A5] leading-relaxed">
                Fondo sin fin de lucro, reservado para enriquecer el acervo de museos y bibliotecas públicas de Chile.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
