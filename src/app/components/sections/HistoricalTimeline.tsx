import { Clock, Calendar, Bookmark, Landmark, ChevronRight } from 'lucide-react';
import { TIMELINE_ERAS } from '../../data/archiveData';

export function HistoricalTimeline() {
  return (
    <section id="cronologia" className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#9E7B3B]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase block mb-2">
            Cronología de las Piezas
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-[#1C1917] mb-4">
            Cuatro Siglos de Historia Chilena
          </h2>
          <p className="text-lg font-serif text-[#57534E]">
            Un recorrido histórico a través de las grandes épocas representadas en los documentos, libros y obras de la colección.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#9E7B3B]/40 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_ERAS.map((era, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FAF7F2] border-2 border-[#9E7B3B] group-hover:bg-[#6D2128] group-hover:border-[#6D2128] transition-colors" />

              {/* Desktop Period Tag on the left */}
              <div className="hidden sm:block absolute -left-32 top-0 text-right w-24">
                <span className="font-cinzel font-bold text-sm text-[#856428] block">
                  {era.period}
                </span>
                <span className="text-[11px] font-serif text-[#78716C]">
                  {era.piecesCount} piezas
                </span>
              </div>

              {/* Card Content */}
              <div className="bg-[#FFFFFF] p-6 rounded-lg border border-[#9E7B3B]/25 shadow-xs group-hover:border-[#9E7B3B] transition-all">
                {/* Mobile Period Tag */}
                <div className="sm:hidden flex items-center justify-between text-xs font-cinzel text-[#856428] font-bold mb-2">
                  <span>{era.period}</span>
                  <span className="text-[11px] font-serif text-[#78716C]">{era.piecesCount} piezas</span>
                </div>

                <span className="text-xs font-cinzel font-semibold tracking-wider text-[#6D2128] uppercase block mb-1">
                  {era.era}
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-2">
                  {era.title}
                </h3>
                <p className="text-sm font-serif text-[#44403C] leading-relaxed mb-4">
                  {era.description}
                </p>

                <div className="pt-3 border-t border-[#EFE8DB] flex items-center gap-2 text-xs font-serif text-[#856428]">
                  <Bookmark className="w-4 h-4 text-[#9E7B3B]" />
                  <span className="text-[#78716C]">Pieza emblemática:</span>
                  <span className="font-semibold text-[#1C1917]">{era.highlightItem}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
