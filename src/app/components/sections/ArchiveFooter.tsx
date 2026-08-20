import { Landmark, Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

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

      {/* Bottom Bar */}
      <div className="border-t border-[#292524] bg-[#141210] py-6 px-4 text-center text-xs font-serif text-[#78716C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {INSTITUTIONAL_CONFIG.collectionName}. Preservación y Donación Cultural de Chile.
          </p>
          <p className="text-[11px] font-cinzel text-[#856428]">
            Custodia Patrimonial Privada · Patrimonio Nacional
          </p>
        </div>
      </div>
    </footer>
  );
}
