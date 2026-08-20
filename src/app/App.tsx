import { useState } from 'react';
import { AppColeccion } from './versiones/v2-coleccion-patrimonial/AppColeccion';
import { AppTaller } from './versiones/v1-taller-restauracion/AppTaller';
import { Layers, Landmark, Wrench } from 'lucide-react';

export default function App() {
  // Version 2 (Colección Patrimonial) activa por defecto
  const [version, setVersion] = useState<'v2' | 'v1'>('v2');

  return (
    <div className="relative">
      {/* Selector discreto de versión para desarrollo/previsualización */}
      <div className="fixed top-2 right-2 z-50 no-print opacity-75 hover:opacity-100 transition-opacity">
        <div className="bg-[#1C1917]/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xl flex items-center gap-2 text-xs font-serif">
          <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[#D8C7A5] font-sans text-[11px]">Versión:</span>
          <button
            onClick={() => setVersion('v2')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-cinzel font-bold transition-all cursor-pointer flex items-center gap-1 ${
              version === 'v2'
                ? 'bg-[#D4AF37] text-[#12100E] shadow-xs'
                : 'text-[#D8C7A5] hover:text-white'
            }`}
            title="Versión 2: Colección Patrimonial & Donación Museográfica"
          >
            <Landmark className="w-3 h-3" />
            <span>V2: Museo</span>
          </button>
          <button
            onClick={() => setVersion('v1')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans transition-all cursor-pointer flex items-center gap-1 ${
              version === 'v1'
                ? 'bg-[#D4AF37] text-[#12100E] font-bold shadow-xs'
                : 'text-[#D8C7A5] hover:text-white'
            }`}
            title="Versión 1: Taller de Restauración y Joyería GAM"
          >
            <Wrench className="w-3 h-3" />
            <span>V1: Taller</span>
          </button>
        </div>
      </div>

      {/* Renderizado de la versión seleccionada */}
      {version === 'v2' ? <AppColeccion /> : <AppTaller />}
    </div>
  );
}
