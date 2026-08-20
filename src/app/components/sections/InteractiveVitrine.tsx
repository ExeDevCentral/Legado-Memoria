import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Sun,
  ZoomIn,
  Volume2,
  VolumeX,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ARCHIVE_ITEMS } from '../../data/archiveData';

export function InteractiveVitrine() {
  const featuredItems = ARCHIVE_ITEMS.filter((item) => item.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightingMode, setLightingMode] = useState<'warm' | 'zenith' | 'grazing'>('warm');
  const [showLoupe, setShowLoupe] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vitrineRef = useRef<HTMLDivElement>(null);

  const activeItem = featuredItems[currentIndex] || featuredItems[0];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!vitrineRef.current) return;
    const rect = vitrineRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const nextItem = () => {
    setCurrentIndex((prev: number) => (prev + 1) % featuredItems.length);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const prevItem = () => {
    setCurrentIndex((prev: number) => (prev - 1 + featuredItems.length) % featuredItems.length);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleVoice = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-CL';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Lighting overlay styles
  const lightingStyles = {
    warm: 'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.22) 0%, rgba(184,134,11,0.08) 50%, rgba(15,14,13,0.85) 100%)',
    zenith: 'radial-gradient(ellipse at 50% 0%, rgba(255,248,220,0.3) 0%, rgba(212,175,55,0.1) 40%, rgba(15,14,13,0.9) 90%)',
    grazing: 'linear-gradient(115deg, rgba(212,175,55,0.25) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.92) 100%)',
  };

  return (
    <section className="py-20 bg-[#12100E] text-[#FAF7F2] relative overflow-hidden border-y-2 border-[#D4AF37]/35">
      {/* Background Museum Wall Ambient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1814] border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Salón de Honor · Vitrina Interactiva 3D
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#FAF7F2] mb-3">
            Tesoros Cumbres del Archivo
          </h2>
          <p className="text-base sm:text-lg font-serif text-[#D8C7A5] max-w-2xl mx-auto">
            Interactúe con las piezas más singulares del fondo. Utilice la lupa curatorial de aumento y alterne la iluminación de galería para examinar texturas, pan de oro y conservación.
          </p>
        </div>

        {/* The 3D Vitrine Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Display Vitrine (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Vitrine Glass Case Frame */}
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl p-1 bg-gradient-to-b from-[#D4AF37]/60 via-[#856428]/30 to-[#D4AF37]/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)]">
              <div
                ref={vitrineRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowLoupe(true)}
                onMouseLeave={() => setShowLoupe(false)}
                className="relative w-full h-full rounded-xl overflow-hidden cursor-crosshair bg-[#0A0908] flex items-center justify-center select-none"
              >
                {/* Dynamic Lighting Overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none transition-all duration-700"
                  style={{ background: lightingStyles[lightingMode] }}
                />

                {/* Glass Reflection Highlight */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-60" />

                {/* Animated Artifact Item */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.92, y: 15 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative z-0 w-full h-full flex items-center justify-center p-6"
                  >
                    <motion.img
                      src={activeItem.images.main}
                      alt={activeItem.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
                      animate={{
                        y: [0, -8, 0],
                        rotateZ: [0, 0.6, 0, -0.6, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Curatorial Magnifier Loupe */}
                {showLoupe && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute z-30 pointer-events-none rounded-full border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.6),inset_0_0_15px_rgba(0,0,0,0.5)] overflow-hidden hidden sm:block"
                    style={{
                      width: '180px',
                      height: '180px',
                      left: `calc(${mousePos.x}% - 90px)`,
                      top: `calc(${mousePos.y}% - 90px)`,
                    }}
                  >
                    {/* Zoomed portion of the image */}
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${activeItem.images.main})`,
                        backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                        backgroundSize: '350%',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    {/* Crosshair indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                      <div className="w-full h-[1px] bg-[#D4AF37]" />
                      <div className="h-full w-[1px] bg-[#D4AF37] absolute" />
                    </div>
                  </motion.div>
                )}

                {/* Top Badge: Inventory Code */}
                <div className="absolute top-4 left-4 z-20 bg-[#12100E]/90 border border-[#D4AF37]/50 px-3 py-1 rounded-sm text-xs font-mono text-[#D4AF37] backdrop-blur-xs">
                  {activeItem.code}
                </div>

                {/* Instruction Tag */}
                <div className="absolute bottom-4 right-4 z-20 bg-[#12100E]/80 border border-[#D4AF37]/30 px-3 py-1 rounded text-[11px] font-serif text-[#D8C7A5] flex items-center gap-1.5 backdrop-blur-xs">
                  <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pase el cursor para lupa 3.5x</span>
                </div>
              </div>
            </div>

            {/* Vitrine Selector Navigation Bar */}
            <div className="flex items-center justify-between w-full max-w-2xl mt-4 px-2">
              <button
                onClick={prevItem}
                className="p-2.5 rounded-full bg-[#1C1814] hover:bg-[#2A241E] border border-[#D4AF37]/40 text-[#D4AF37] transition-all cursor-pointer shadow-xs"
                aria-label="Pieza anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {featuredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        setIsSpeaking(false);
                      }
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]'
                        : 'w-2.5 bg-[#4A3F33] hover:bg-[#786653]'
                    }`}
                    aria-label={`Ver ${item.title}`}
                  />
                ))}
              </div>

              <button
                onClick={nextItem}
                className="p-2.5 rounded-full bg-[#1C1814] hover:bg-[#2A241E] border border-[#D4AF37]/40 text-[#D4AF37] transition-all cursor-pointer shadow-xs"
                aria-label="Siguiente pieza"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Curatorial Plaque & Controls (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Lighting Control Toggle */}
            <div className="bg-[#1C1814] p-4 rounded-xl border border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#D8C7A5]">
                <Sun className="w-4 h-4 text-[#D4AF37]" />
                <span>Iluminación de Vitrina:</span>
              </div>
              <div className="flex gap-1.5">
                {[
                  { id: 'warm', label: 'Cálida' },
                  { id: 'zenith', label: 'Cenital' },
                  { id: 'grazing', label: 'Rasante' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setLightingMode(mode.id as any)}
                    className={`px-2.5 py-1 text-xs font-serif rounded transition-colors cursor-pointer ${
                      lightingMode === mode.id
                        ? 'bg-[#D4AF37] text-[#12100E] font-bold shadow-xs'
                        : 'bg-[#2A241E] text-[#D8C7A5] hover:bg-[#3D342B]'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Classical Museum Brass Plaque */}
            <div className="relative bg-gradient-to-b from-[#221D18] to-[#171411] p-6 sm:p-8 rounded-xl border-2 border-[#D4AF37]/50 shadow-2xl text-left">
              {/* Corner Screw Rivets */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-[#D4AF37]/60 border border-[#856428]" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#D4AF37]/60 border border-[#856428]" />
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-[#D4AF37]/60 border border-[#856428]" />
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-[#D4AF37]/60 border border-[#856428]" />

              {/* Plaque Header */}
              <div className="flex items-center justify-between mb-3 border-b border-[#D4AF37]/30 pb-2">
                <span className="font-cinzel text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {activeItem.categoryLabel}
                </span>
                <span className="font-mono text-xs text-[#D8C7A5]">
                  {activeItem.century} ({activeItem.year})
                </span>
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-2xl font-bold text-[#FAF7F2] mb-1 leading-snug">
                {activeItem.title}
              </h3>
              {activeItem.subtitle && (
                <p className="text-xs font-serif italic text-[#D8C7A5] mb-4">
                  {activeItem.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-sm font-serif text-[#EFE8DB] leading-relaxed mb-6">
                {activeItem.description}
              </p>

              {/* Technical Data Points */}
              <div className="space-y-2 text-xs font-serif text-[#D8C7A5] border-t border-[#D4AF37]/20 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#856428] font-cinzel">Autor / Taller:</span>
                  <span className="text-right text-[#FAF7F2]">{activeItem.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#856428] font-cinzel">Materiales:</span>
                  <span className="text-right text-[#FAF7F2] max-w-[240px] truncate">{activeItem.materials}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#856428] font-cinzel">Estado:</span>
                  <span className="text-right text-[#2E6F40] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeItem.conservationBadge}
                  </span>
                </div>
              </div>

              {/* Plaque Actions: Audio & Institution */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => toggleVoice(activeItem.audioNarrative || activeItem.description)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#D4AF37] hover:bg-[#B8860B] text-[#12100E] font-cinzel font-bold text-xs rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span>Pausar Relato</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span>Escuchar Audio Curatorial</span>
                    </>
                  )}
                </button>

                <a
                  href="#catalogo"
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#1C1814] hover:bg-[#2A241E] border border-[#D4AF37]/40 text-[#D8C7A5] hover:text-white font-serif text-xs rounded text-center transition-colors"
                >
                  Ver Ficha en Catálogo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
