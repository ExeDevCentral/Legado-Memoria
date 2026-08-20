import { BookOpen, Shield, Award, Landmark, ArrowRight, Download } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

export function ArchiveHero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProtocol = () => {
    document.getElementById('donacion')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#FAF7F2] border-b border-[#9E7B3B]/25 overflow-hidden py-16 md:py-24">
      {/* Background Classical Watermark / Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#1C1917_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFFFF] border border-[#9E7B3B]/40 rounded-full shadow-xs mb-8">
            <Landmark className="w-4 h-4 text-[#6D2128]" />
            <span className="font-cinzel text-xs md:text-sm font-semibold tracking-widest text-[#6D2128] uppercase">
              Archivo Histórico &amp; Patrimonio Cultural de Chile
            </span>
          </div>

          {/* Main Dignified Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-[#1C1917] tracking-tight leading-[1.15] mb-6">
            Custodia, Memoria <br />
            <span className="text-[#856428] font-normal italic font-cormorant">&amp; Vocación de Donación</span>
          </h1>

          {/* Subtitle / Philanthropic Statement */}
          <p className="text-xl md:text-2xl font-serif text-[#44403C] max-w-3xl mx-auto leading-relaxed mb-10">
            Fondo y archivo documental, bibliográfico y artístico del siglo XVII al XX. Una vida consagrada a la preservación del patrimonio para su entrega solemne a los museos y bibliotecas públicas de nuestra Nación.
          </p>

          {/* Action Buttons: Clean, High-Contrast, Accessible */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToCatalog}
              className="w-full sm:w-auto px-8 py-4 bg-[#9E7B3B] text-white hover:bg-[#856428] rounded-md font-cinzel font-semibold text-base tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explorar el Catálogo de Piezas</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToProtocol}
              className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#1C1917] hover:bg-[#F4EFE6] border-2 border-[#9E7B3B]/40 rounded-md font-cinzel font-semibold text-base tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Shield className="w-5 h-5 text-[#6D2128]" />
              <span>Protocolo para Museos</span>
            </button>
          </div>

          {/* Curatorial Pillars / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#9E7B3B]/20 text-left">
            <div className="bg-[#FFFFFF] p-6 rounded-lg border border-[#EFE8DB] shadow-xs relative">
              <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#6D2128] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
                Piezas de Rango Museo
              </h2>
              <p className="text-sm font-serif text-[#57534E] leading-relaxed">
                Incunables, primeras ediciones príncipes, óleos de grandes maestros de la pintura chilena y correspondencia original de Estado.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-lg border border-[#EFE8DB] shadow-xs relative">
              <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#856428] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
                Conservación Preventiva
              </h2>
              <p className="text-sm font-serif text-[#57534E] leading-relaxed">
                Tratamientos de desacidificación, pasivación de tintas ferrogálicas y encuadernaciones históricas estabilizadas por especialistas.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-lg border border-[#EFE8DB] shadow-xs relative">
              <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#6D2128] mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
                Destino Público &amp; Gratuito
              </h2>
              <p className="text-sm font-serif text-[#57534E] leading-relaxed">
                Fondo sin propósito comercial, reservado para el enriquecimiento cultural de instituciones museográficas y el pueblo de Chile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
