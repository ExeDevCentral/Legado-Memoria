import { useState, useEffect } from 'react';
import { Type, Eye, ZoomIn, ZoomOut, Landmark, BookOpen, ShieldCheck, Phone } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

export function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState<'medium' | 'large' | 'xlarge'>('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.setAttribute('data-high-contrast', highContrast ? 'true' : 'false');
  }, [highContrast]);

  const increaseFont = () => {
    if (fontSize === 'medium') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
  };

  const decreaseFont = () => {
    if (fontSize === 'xlarge') setFontSize('large');
    else if (fontSize === 'large') setFontSize('medium');
  };

  return (
    <>
      {/* Panel de opciones de accesibilidad (Flotante sobre la barra inferior en móvil o esquina en desktop) */}
      <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 no-print flex flex-col items-end gap-2">
        {isOpen && (
          <div className="bg-[#FFFFFF] border-2 border-[#9E7B3B] p-4 rounded-xl shadow-2xl flex flex-col gap-3 text-[#1C1917] animate-in fade-in slide-in-from-bottom-2 duration-200 min-w-[260px]">
            <div className="flex items-center justify-between border-b border-[#EFE8DB] pb-2">
              <span className="font-cinzel text-xs uppercase tracking-wider font-semibold text-[#856428] flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                Lectura Cómoda (+80)
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#57534E] hover:text-[#1C1917] text-xs font-serif px-1.5 py-0.5 rounded"
                title="Cerrar barra"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-[#57534E] font-serif">Tamaño de letra:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFont}
                  disabled={fontSize === 'medium'}
                  className="flex-1 py-1.5 px-2.5 bg-[#F4EFE6] hover:bg-[#EFE8DB] disabled:opacity-40 border border-[#9E7B3B]/30 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  title="Reducir letra"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                  <span>A-</span>
                </button>
                <span className="text-xs font-mono font-medium px-2 py-1 bg-[#FAF7F2] rounded border border-[#EFE8DB]">
                  {fontSize === 'medium' ? 'Normal' : fontSize === 'large' ? 'Grande' : 'Muy Grande'}
                </span>
                <button
                  onClick={increaseFont}
                  disabled={fontSize === 'xlarge'}
                  className="flex-1 py-1.5 px-2.5 bg-[#9E7B3B] text-white hover:bg-[#856428] disabled:opacity-40 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  title="Aumentar letra"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>A+</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#EFE8DB] flex items-center justify-between">
              <span className="text-xs text-[#57534E] font-serif">Alto Contraste:</span>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`px-3 py-1 text-xs rounded border transition-colors ${
                  highContrast
                    ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                    : 'bg-[#F4EFE6] text-[#1C1917] border-[#9E7B3B]/30 hover:bg-[#EFE8DB]'
                }`}
              >
                {highContrast ? 'Activado' : 'Desactivado'}
              </button>
            </div>
          </div>
        )}

        {/* Botón Flotante Solo Desktop (>= md) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#FFFFFF] border-2 border-[#9E7B3B] text-[#1C1917] rounded-full shadow-lg hover:shadow-xl transition-all items-center gap-2 text-xs md:text-sm font-serif font-medium cursor-pointer group"
          title="Opciones de accesibilidad y tamaño de letra"
          aria-label="Opciones de accesibilidad"
        >
          <span className="p-1 rounded-full bg-[#9E7B3B] text-white group-hover:scale-105 transition-transform">
            <Type className="w-3.5 h-3.5" />
          </span>
          <span className="font-serif">Accesibilidad / Letra</span>
        </button>
      </div>

      {/* Mobile Only Ergonomic Bottom Dock (< md) — Minimalista, bien espaciado, sin superponerse */}
      <nav
        aria-label="Navegación rápida móvil patrimonial"
        className="md:hidden fixed bottom-3 inset-x-3 z-40 no-print select-none pb-[env(safe-area-inset-bottom)]"
      >
        <div className="mx-auto max-w-md rounded-2xl border-2 border-[#9E7B3B] bg-[#FAF7F2]/95 backdrop-blur-xl shadow-[0_14px_36px_rgba(28,25,23,0.35)] p-1.5 grid grid-cols-5 items-center gap-1 font-serif">
          <a
            href="#vitrina"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl text-[#1C1917] hover:bg-[#F4EFE6] active:scale-95 transition-all"
          >
            <Landmark className="w-4 h-4 text-[#9E7B3B]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Vitrina</span>
          </a>

          <a
            href="#catalogo"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl text-[#1C1917] hover:bg-[#F4EFE6] active:scale-95 transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#9E7B3B]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Catálogo</span>
          </a>

          <a
            href="#donacion"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl text-[#1C1917] hover:bg-[#F4EFE6] active:scale-95 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-[#9E7B3B]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Donación</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl active:scale-95 transition-all cursor-pointer ${
              isOpen ? 'bg-[#9E7B3B]/20 text-[#6D2128] font-bold' : 'text-[#1C1917] hover:bg-[#F4EFE6]'
            }`}
          >
            <Type className="w-4 h-4 text-[#9E7B3B]" />
            <span className="text-[10px] font-semibold mt-1 leading-none">Letra A+</span>
          </button>

          <a
            href={`tel:${INSTITUTIONAL_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-[#9E7B3B] text-white font-semibold shadow-xs active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-bold mt-1 leading-none">Llamar</span>
          </a>
        </div>
      </nav>
    </>
  );
}
