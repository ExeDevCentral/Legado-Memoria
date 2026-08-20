import { useState } from 'react';
import { Menu, X, Landmark, BookOpen, Clock, ShieldCheck, Phone } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

export function ArchiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Catálogo Patrimonial', href: '#catalogo', icon: BookOpen },
    { name: 'Cronología Histórica', href: '#cronologia', icon: Clock },
    { name: 'El Legado & Misión', href: '#legado', icon: Landmark },
    { name: 'Protocolo de Donación', href: '#donacion', icon: ShieldCheck },
    { name: 'Contacto Institucional', href: '#contacto', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#9E7B3B]/25 no-print shadow-xs">
      {/* Top Banner: Formal notice */}
      <div className="bg-[#1C1917] text-[#FAF7F2] py-1.5 px-4 text-center text-xs tracking-widest uppercase font-cinzel border-b border-[#9E7B3B]/40 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B3B]" />
        <span>Fondo Patrimonial Privado · Destinado a Donación Museográfica en Chile</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B3B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Seal */}
          <a href="#" className="flex items-center gap-3.5 group text-left">
            <div className="w-12 h-12 rounded-sm border-2 border-[#9E7B3B] bg-[#FFFFFF] flex items-center justify-center p-1.5 shadow-xs group-hover:border-[#6D2128] transition-colors">
              <Landmark className="w-7 h-7 text-[#9E7B3B] group-hover:text-[#6D2128] transition-colors" />
            </div>
            <div>
              <span className="block font-cinzel text-base md:text-lg font-bold tracking-wider text-[#1C1917] group-hover:text-[#6D2128] transition-colors leading-tight">
                {INSTITUTIONAL_CONFIG.collectionName}
              </span>
              <span className="block text-xs font-serif text-[#57534E] tracking-normal">
                Archivo &amp; Exhibición Previa a Donación Cultural
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-serif text-[#292524] hover:text-[#6D2128] hover:bg-[#F4EFE6] rounded transition-colors flex items-center gap-1.5"
                >
                  <Icon className="w-4 h-4 text-[#9E7B3B]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href={`tel:${INSTITUTIONAL_CONFIG.phone}`}
              className="ml-2 px-4 py-2 bg-[#9E7B3B] text-white hover:bg-[#856428] rounded text-sm font-cinzel font-semibold tracking-wide transition-all shadow-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Llamar Directo</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1C1917] hover:text-[#6D2128] rounded border border-[#9E7B3B]/30"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b-2 border-[#9E7B3B] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-base font-serif text-[#1C1917] hover:bg-[#F4EFE6] rounded border-b border-[#EFE8DB]"
              >
                <Icon className="w-5 h-5 text-[#9E7B3B]" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href={`tel:${INSTITUTIONAL_CONFIG.phone}`}
              className="w-full py-3 bg-[#9E7B3B] text-white hover:bg-[#856428] rounded text-center font-cinzel font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al Conservador: {INSTITUTIONAL_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
