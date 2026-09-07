import { Landmark, Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';
import { CraftedBySignature } from '../ui/CraftedBySignature';

export function ArchiveFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] border-t-2 border-[#9E7B3B] no-print">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Col 1: Brand & Heritage Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#9E7B3B] bg-[#292524] flex items-center justify-center p-1.5">
                <Landmark className="w-5 h-5 text-[#9E7B3B]" />
              </div>
              <span className="font-cinzel text-lg font-bold text-[#FAF7F2] tracking-wider">
                {INSTITUTIONAL_CONFIG.collectionName}
              </span>
            </div>

            <p className="text-sm font-serif text-[#D8C7A5] leading-relaxed max-w-md">
              Fondo privado documental, bibliográfico y artístico consagrado al resguardo de las raíces históricas de Chile y su ulterior entrega a instituciones museográficas de la República.
            </p>

            <div className="p-3 bg-[#292524] border border-[#9E7B3B]/30 rounded text-xs font-serif text-[#FAF7F2]/80 max-w-md">
              <span className="text-[#9E7B3B] font-cinzel font-semibold block mb-1">Declaración de Fines:</span>
              Fondo sin carácter comercial ni mercantil. Custodia altruista con fines estrictamente patrimoniales y educativos.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#9E7B3B] uppercase tracking-widest">
              Índice del Archivo
            </h4>
            <ul className="space-y-2 text-sm font-serif text-[#FAF7F2]/80">
              <li>
                <a href="#catalogo" className="hover:text-[#9E7B3B] transition-colors">
                  Catálogo General de Piezas
                </a>
              </li>
              <li>
                <a href="#cronologia" className="hover:text-[#9E7B3B] transition-colors">
                  Cronología &amp; Siglos (XVII–XX)
                </a>
              </li>
              <li>
                <a href="#legado" className="hover:text-[#9E7B3B] transition-colors">
                  Principios &amp; Misión Cívica
                </a>
              </li>
              <li>
                <a href="#donacion" className="hover:text-[#9E7B3B] transition-colors">
                  Protocolo de Donación para Museos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#9E7B3B] transition-colors">
                  Contacto Curatorial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Institutional Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#9E7B3B] uppercase tracking-widest">
              Contacto &amp; Gabinete
            </h4>
            <ul className="space-y-3 text-sm font-serif text-[#FAF7F2]/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <a href={`tel:${INSTITUTIONAL_CONFIG.phone}`} className="hover:text-[#9E7B3B] font-bold text-[#FAF7F2]">
                  {INSTITUTIONAL_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <a href={`mailto:${INSTITUTIONAL_CONFIG.email}`} className="hover:text-[#9E7B3B]">
                  {INSTITUTIONAL_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7B3B] shrink-0 mt-0.5" />
                <span>Santiago de Chile (Coordinación de reuniones institucionales)</span>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-4 px-4 py-2 bg-[#292524] hover:bg-[#3F3B36] border border-[#9E7B3B]/40 rounded text-xs font-serif text-[#D8C7A5] hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver al inicio</span>
            </button>
          </div>
        </div>
      </div>

      {/* ExePaginasWeb Signature */}
      <CraftedBySignature variant="dark" showBar className="mt-0" />

      {/* Bottom Bar */}
      <div className="border-t border-[#292524] bg-[#141210] py-6 px-4 text-center text-xs font-serif text-[#78716C]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <p>
              © {new Date().getFullYear()} {INSTITUTIONAL_CONFIG.collectionName}. Preservación y Donación Cultural de Chile.
            </p>
            <p className="text-[11px] font-cinzel text-[#856428]">
              Custodia Patrimonial Privada · Patrimonio Nacional
            </p>
          </div>
          <div className="xepw-crafted" role="contentinfo">
            <div className="xepw-sig-glow" aria-hidden="true"></div>
            <a className="xepw-sig-link" href="https://exepaginasweb.com" target="_blank" rel="noopener noreferrer" title="Diseño & Desarrollo por Exepaginasweb.com">
              <span className="xepw-sig-shimmer" aria-hidden="true"></span>
              <span className="xepw-sig-prefix">Crafted with precision by</span>
              <span className="xepw-sig-brand">Exepaginasweb.com</span>
              <span className="xepw-sig-sparkle" aria-hidden="true">✦</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        :where(.xepw-crafted){--xepw-bg:transparent;--xepw-ink:rgba(250,248,245,.5);--xepw-ink-hover:rgba(250,248,245,.95);--xepw-accent:#9E7B3B;--xepw-accent-soft:#D8C7A5;--xepw-line:transparent;--xepw-badge:rgba(158,123,59,.06);--xepw-border:rgba(158,123,59,.2);--xepw-border-hover:rgba(158,123,59,.45);--xepw-glow:rgba(158,123,59,.18);position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:.75rem 1rem;width:100%}
        :where(.xepw-crafted) .xepw-sig-glow{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(158,123,59,.15) 0%,transparent 70%);pointer-events:none;animation:xepw-sig-pulse 4s ease-in-out infinite}
        :where(.xepw-crafted) .xepw-sig-link{position:relative;z-index:1;display:inline-flex;align-items:center;gap:.6rem;padding:.4rem 1rem;border-radius:9999px;text-decoration:none;background:var(--xepw-badge);border:1px solid var(--xepw-border);font-family:'Plus Jakarta Sans','Inter',system-ui,-apple-system,sans-serif;font-size:.7rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--xepw-ink);transition:color .4s cubic-bezier(.16,1,.3,1),background .4s ease,border-color .4s ease,box-shadow .4s ease,transform .4s cubic-bezier(.16,1,.3,1)}
        :where(.xepw-crafted) .xepw-sig-link:hover{color:var(--xepw-ink-hover);background:rgba(158,123,59,.1);border-color:var(--xepw-border-hover);box-shadow:0 0 20px var(--xepw-glow),0 0 50px rgba(158,123,59,.06);transform:translateY(-2px)}
        :where(.xepw-crafted) .xepw-sig-shimmer{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none}
        :where(.xepw-crafted) .xepw-sig-shimmer::after{content:'';position:absolute;top:0;left:0;width:60%;height:100%;background:linear-gradient(110deg,transparent,rgba(255,255,255,.1),transparent);transform:translateX(-120%);transition:transform .9s cubic-bezier(.16,1,.3,1)}
        :where(.xepw-crafted) .xepw-sig-link:hover .xepw-sig-shimmer::after{transform:translateX(260%)}
        :where(.xepw-crafted) .xepw-sig-prefix{font-weight:400;opacity:.7;white-space:nowrap}
        :where(.xepw-crafted) .xepw-sig-brand{font-weight:700;background:linear-gradient(135deg,var(--xepw-accent-soft) 0%,var(--xepw-accent) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}
        :where(.xepw-crafted) .xepw-sig-sparkle{color:var(--xepw-accent-soft);font-size:.8rem;line-height:1;display:inline-block;transition:transform .6s cubic-bezier(.34,1.56,.64,1),color .3s ease}
        :where(.xepw-crafted) .xepw-sig-link:hover .xepw-sig-sparkle{transform:rotate(180deg) scale(1.3);color:var(--xepw-accent)}
        @media (max-width:768px){:where(.xepw-crafted) .xepw-sig-prefix{display:none}:where(.xepw-crafted) .xepw-sig-link{letter-spacing:.14em}}
        @media (prefers-reduced-motion: reduce){:where(.xepw-crafted) .xepw-sig-glow{animation:none}:where(.xepw-crafted) .xepw-sig-shimmer::after{transition:none;transform:none}:where(.xepw-crafted) .xepw-sig-sparkle{transition:none}}
        @keyframes xepw-sig-pulse{0%,100%{opacity:.35;transform:translate(-50%,-50%) scale(.92)}50%{opacity:.85;transform:translate(-50%,-50%) scale(1.05)}}
      `}</style>
    </footer>
  );
}
