import { Landmark, HeartHandshake, ShieldCheck, Scale, Award } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

export function CuratorialPhilosophy() {
  return (
    <section id="legado" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#9E7B3B]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase block mb-2">
            Principios &amp; Misión Cívica
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-[#1C1917] mb-4">
            El Sentido de una Vida de Custodia
          </h2>
          <div className="w-16 h-0.5 bg-[#9E7B3B] mx-auto mb-6" />
        </div>

        {/* Testimonial / Philosophy Card */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-xl border-2 border-[#9E7B3B]/30 shadow-xs relative overflow-hidden mb-12">
          {/* Classic quote watermark */}
          <div className="text-7xl font-serif text-[#9E7B3B]/15 absolute top-2 left-6 select-none pointer-events-none">
            “
          </div>

          <div className="relative z-10 space-y-6">
            <p className="text-xl sm:text-2xl font-serif text-[#1C1917] leading-relaxed italic text-center sm:text-left">
              «El patrimonio no pertenece a quien circunstancialmente lo resguarda en sus manos, sino a la memoria de la República y a las futuras generaciones de chilenos. Reunir estos libros, lienzos y documentos ha sido un deber de gratitud hacia nuestra historia.»
            </p>

            <div className="pt-6 border-t border-[#EFE8DB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="font-cinzel font-bold text-base text-[#1C1917] block">
                  Custodio &amp; Donante del Fondo
                </span>
                <span className="text-xs font-serif text-[#57534E]">
                  Colección Particular · Santiago de Chile
                </span>
              </div>
              <div className="px-4 py-1.5 bg-[#FAF7F2] border border-[#9E7B3B]/40 rounded-full text-xs font-cinzel font-semibold text-[#6D2128]">
                Patrimonio Destinado a Donación
              </div>
            </div>
          </div>
        </div>

        {/* 3 Philanthropic Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#FFFFFF] rounded-lg border border-[#EFE8DB]">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#856428] mx-auto mb-4">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
              Vocación No Comercial
            </h3>
            <p className="text-xs font-serif text-[#57534E] leading-relaxed">
              Ninguna pieza está sujeta a especulación ni tasación mercantil. La colección se preserva indivisible con fines altruistas.
            </p>
          </div>

          <div className="p-6 bg-[#FFFFFF] rounded-lg border border-[#EFE8DB]">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#6D2128] mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
              Rigor Historiográfico
            </h3>
            <p className="text-xs font-serif text-[#57534E] leading-relaxed">
              Cada ejemplar ha sido autentificado con análisis de filigranas, sellos notariales y cotejo en archivos nacionales.
            </p>
          </div>

          <div className="p-6 bg-[#FFFFFF] rounded-lg border border-[#EFE8DB]">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#9E7B3B]/40 flex items-center justify-center text-[#856428] mx-auto mb-4">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-[#1C1917] mb-2">
              Destino Público &amp; Educativo
            </h3>
            <p className="text-xs font-serif text-[#57534E] leading-relaxed">
              Asegurar que estudiantes, investigadores y ciudadanos tengan acceso libre al conocimiento de sus raíces históricas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
