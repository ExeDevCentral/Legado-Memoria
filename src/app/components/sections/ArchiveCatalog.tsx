import { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Palette,
  Scroll,
  Cog,
  FileText,
  Landmark,
  Eye,
  Printer,
  Volume2,
  VolumeX,
  X,
  ShieldCheck,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
  ChevronRight,
  ZoomIn
} from 'lucide-react';
import { ARCHIVE_ITEMS, ArchiveItem } from '../../data/archiveData';

export function ArchiveCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCentury, setSelectedCentury] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<ArchiveItem | null>(null);
  const [activeDetailImage, setActiveDetailImage] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'grid'>('cards');

  const categories = [
    { id: 'all', label: 'Toda la Colección', icon: Layers, count: ARCHIVE_ITEMS.length },
    { id: 'libros', label: 'Libros Raros & Primeras Ediciones', icon: BookOpen, count: ARCHIVE_ITEMS.filter(i => i.category === 'libros').length },
    { id: 'arte', label: 'Pintura & Obras de Arte Clásicas', icon: Palette, count: ARCHIVE_ITEMS.filter(i => i.category === 'arte').length },
    { id: 'manuscritos', label: 'Manuscritos & Documentos de Estado', icon: Scroll, count: ARCHIVE_ITEMS.filter(i => i.category === 'manuscritos').length },
    { id: 'maquinaria', label: 'Maquinaria & Mecanismos Históricos', icon: Cog, count: ARCHIVE_ITEMS.filter(i => i.category === 'maquinaria').length },
  ];

  const centuries = ['all', 'Siglo XVII', 'Siglo XVIII', 'Siglo XIX', 'Siglo XX'];

  const filteredItems = useMemo(() => {
    return ARCHIVE_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchCentury = selectedCentury === 'all' || item.century === selectedCentury;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.destinationInstitution.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      return matchCategory && matchCentury && matchSearch;
    });
  }, [selectedCategory, selectedCentury, searchQuery]);

  const handleOpenItem = (item: ArchiveItem) => {
    setActiveItem(item);
    setActiveDetailImage(item.images.main);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleCloseModal = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setActiveItem(null);
    setActiveDetailImage(null);
  };

  const toggleAudioNarrative = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('La síntesis de voz no está disponible en este navegador.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-CL';
      utterance.rate = 0.9; // Paused, respectful tone
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#9E7B3B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase block mb-2">
            Inventario General &amp; Registro Curatorial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#1C1917] mb-4">
            Catálogo del Patrimonio
          </h2>
          <p className="text-lg font-serif text-[#57534E]">
            Examine las piezas históricas preservadas en este fondo privado. Cada ficha contiene datos de conservación, proveniencia y destino institucional de donación.
          </p>
        </div>

        {/* Search and Century Bar */}
        <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl border border-[#9E7B3B]/25 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#856428]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título, autor, siglo, código o institución..."
                className="w-full pl-11 pr-4 py-3 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded-lg text-base font-serif text-[#1C1917] placeholder-[#78716C] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#57534E] hover:text-[#1C1917] px-1.5 py-0.5"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Century Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-cinzel text-[#57534E] font-semibold whitespace-nowrap">
                Época:
              </span>
              <div className="flex gap-1.5">
                {centuries.map((century) => (
                  <button
                    key={century}
                    onClick={() => setSelectedCentury(century)}
                    className={`px-3 py-1.5 text-xs font-serif rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      selectedCentury === century
                        ? 'bg-[#1C1917] text-[#FAF7F2] font-semibold'
                        : 'bg-[#F4EFE6] text-[#44403C] hover:bg-[#EFE8DB]'
                    }`}
                  >
                    {century === 'all' ? 'Todos los Siglos' : century}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#EFE8DB] no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-serif font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#9E7B3B] text-white shadow-xs font-semibold'
                      : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F4EFE6] border border-[#9E7B3B]/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#856428]'}`} />
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-[#EFE8DB] text-[#57534E]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & View Mode */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm font-serif text-[#57534E]">
            Mostrando <span className="font-semibold text-[#1C1917]">{filteredItems.length}</span> piezas catalogadas
          </p>
          <div className="flex items-center gap-2 text-xs font-serif text-[#57534E]">
            <span>Orden: Cronológico y por importancia museográfica</span>
          </div>
        </div>

        {/* Catalog Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-xl border border-[#EFE8DB] p-8">
            <BookOpen className="w-12 h-12 text-[#9E7B3B]/50 mx-auto mb-3" />
            <h3 className="font-cinzel text-lg font-bold text-[#1C1917] mb-1">
              No se encontraron piezas con los filtros seleccionados
            </h3>
            <p className="text-sm font-serif text-[#57534E] max-w-md mx-auto mb-4">
              Intente con otros términos de búsqueda o seleccione "Toda la Colección".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedCentury('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#9E7B3B] text-white rounded text-xs font-cinzel font-semibold"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => handleOpenItem(item)}
                className="heritage-card-frame rounded-lg overflow-hidden flex flex-col group cursor-pointer border border-[#9E7B3B]/25 hover:border-[#9E7B3B] hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Archival Badge */}
                <div className="relative h-64 bg-[#EFE8DB] overflow-hidden">
                  <img
                    src={item.images.main}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Accession Code Badge */}
                  <div className="absolute top-3 left-3 bg-[#1C1917]/90 text-[#FAF7F2] text-[11px] font-mono px-2.5 py-1 rounded tracking-wider border border-[#9E7B3B]/40">
                    {item.code}
                  </div>

                  {/* Century Badge */}
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/95 text-[#6D2128] text-xs font-cinzel font-bold px-2.5 py-1 rounded shadow-xs border border-[#9E7B3B]/30">
                    {item.century} · {item.year}
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1.5 bg-[#9E7B3B] text-white text-xs font-cinzel font-semibold rounded shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Ficha Completa</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                  <div>
                    {/* Category and Conservation badge */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-serif font-medium text-[#856428]">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-serif text-[#57534E] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2E6F40]" />
                        {item.conservationBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel text-lg font-bold text-[#1C1917] group-hover:text-[#6D2128] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>

                    {/* Author & Year */}
                    <p className="text-sm font-serif italic text-[#6D2128] mb-3">
                      {item.author} ({item.year})
                    </p>

                    {/* Short Description */}
                    <p className="text-sm font-serif text-[#57534E] line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Destination Institution */}
                  <div className="pt-4 border-t border-[#EFE8DB] flex items-start gap-2 text-xs font-serif text-[#44403C]">
                    <Landmark className="w-4 h-4 text-[#856428] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#78716C] block text-[10px] uppercase font-cinzel font-semibold">Destino de Donación Previsto:</span>
                      <span className="font-medium text-[#1C1917]">{item.destinationInstitution}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* ─── DETAILED CURATORIAL MODAL ─── */}
      {activeItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1C1917]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] w-full max-w-5xl rounded-xl border-2 border-[#9E7B3B] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-[#1C1917]">
            {/* Modal Header */}
            <div className="bg-[#1C1917] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b-2 border-[#9E7B3B]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#9E7B3B] text-white flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#D8C7A5] tracking-wider block">
                    FICHA TÉCNICA MUSEOGRÁFICA · {activeItem.code}
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white leading-tight">
                    {activeItem.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-[#292524] hover:bg-[#3F3B36] border border-[#9E7B3B]/40 text-[#FAF7F2] rounded text-xs font-serif flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Imprimir Ficha"
                >
                  <Printer className="w-3.5 h-3.5 text-[#9E7B3B]" />
                  <span className="hidden sm:inline">Imprimir Ficha</span>
                </button>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-[#D8C7A5] hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Top Details & Image Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: High-Res Image Viewer & Detail Thumbnails */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="relative rounded-lg overflow-hidden border border-[#9E7B3B]/40 bg-[#FFFFFF] shadow-inner aspect-[4/3] flex items-center justify-center">
                    <img
                      src={activeDetailImage || activeItem.images.main}
                      alt={activeItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#1C1917]/80 text-[#FAF7F2] text-[10px] font-mono px-2 py-1 rounded">
                      Registro Visual de Conservación
                    </div>
                  </div>

                  {/* Detail Thumbnails */}
                  {activeItem.images.details.length > 0 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveDetailImage(activeItem.images.main)}
                        className={`h-16 w-20 rounded border overflow-hidden transition-all ${
                          activeDetailImage === activeItem.images.main
                            ? 'border-[#9E7B3B] ring-2 ring-[#9E7B3B]/40'
                            : 'border-[#EFE8DB] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={activeItem.images.main} alt="Vista General" className="w-full h-full object-cover" />
                      </button>
                      {activeItem.images.details.map((detailUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveDetailImage(detailUrl)}
                          className={`h-16 w-20 rounded border overflow-hidden transition-all ${
                            activeDetailImage === detailUrl
                              ? 'border-[#9E7B3B] ring-2 ring-[#9E7B3B]/40'
                              : 'border-[#EFE8DB] opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={detailUrl} alt={`Detalle ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Audio Narrative Player */}
                  {activeItem.audioNarrative && (
                    <div className="p-4 bg-[#FFFFFF] rounded-lg border border-[#9E7B3B]/30 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[#FAF7F2] text-[#856428] border border-[#9E7B3B]/30">
                          <Volume2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-cinzel text-xs font-bold text-[#1C1917] block">
                            Relato Curatorial Narrado
                          </span>
                          <span className="text-xs font-serif text-[#57534E]">
                            Locución accesible para personas mayores
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleAudioNarrative(activeItem.audioNarrative || '')}
                        className="px-3.5 py-2 bg-[#9E7B3B] text-white hover:bg-[#856428] rounded text-xs font-serif font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        {isSpeaking ? (
                          <>
                            <VolumeX className="w-4 h-4" />
                            <span>Pausar</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4" />
                            <span>Escuchar Relato</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Right: Curatorial Metadata Table */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-[#9E7B3B]/15 text-[#856428] font-cinzel text-xs font-semibold rounded border border-[#9E7B3B]/30">
                        {activeItem.categoryLabel}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#6D2128]/10 text-[#6D2128] font-serif text-xs font-semibold rounded">
                        {activeItem.century} ({activeItem.year})
                      </span>
                    </div>

                    <h2 className="text-2xl font-cinzel font-bold text-[#1C1917] mb-1">
                      {activeItem.title}
                    </h2>
                    {activeItem.subtitle && (
                      <p className="text-sm font-serif italic text-[#57534E] mb-4">
                        {activeItem.subtitle}
                      </p>
                    )}

                    {/* Curatorial Spec Grid */}
                    <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#EFE8DB] space-y-2.5 text-xs font-serif mb-4">
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel">Autor / Creador:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.author}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel">Fecha / Época:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.year} ({activeItem.century})</span>
                      </div>
                      {activeItem.dimensions && (
                        <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                          <span className="text-[#78716C] font-cinzel">Dimensiones:</span>
                          <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.dimensions}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel">Materiales:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.materials}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel">Procedencia:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.provenance}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1">
                        <span className="text-[#78716C] font-cinzel">Conservación:</span>
                        <span className="col-span-2 font-medium text-[#2E6F40] flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {activeItem.conservationState}
                        </span>
                      </div>
                    </div>

                    {/* Historical Context Description */}
                    <div className="space-y-2">
                      <h4 className="font-cinzel text-xs font-bold text-[#856428] uppercase tracking-wider">
                        Descripción &amp; Relevancia Histórica
                      </h4>
                      <p className="text-sm font-serif text-[#292524] leading-relaxed">
                        {activeItem.description}
                      </p>
                      <p className="text-sm font-serif text-[#57534E] leading-relaxed italic bg-[#F4EFE6] p-3 rounded border-l-2 border-[#9E7B3B]">
                        "{activeItem.historicalContext}"
                      </p>
                    </div>
                  </div>

                  {/* Destination Institution Box */}
                  <div className="p-4 bg-[#FFFFFF] rounded-lg border-2 border-[#9E7B3B]/40 shadow-xs">
                    <div className="flex items-center gap-2 mb-1 text-xs font-cinzel font-bold text-[#6D2128]">
                      <Landmark className="w-4 h-4" />
                      <span>Destino Institucional Previsto para Donación:</span>
                    </div>
                    <p className="text-sm font-serif font-bold text-[#1C1917]">
                      {activeItem.destinationInstitution}
                    </p>
                    <p className="text-xs font-serif text-[#78716C] mt-1">
                      Pieza reservada para formalización de comodato / donación cultural definitiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FFFFFF] px-6 py-4 border-t border-[#EFE8DB] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs font-serif text-[#57534E] text-center sm:text-left">
                Registro del Fondo Patrimonial Privado · No Comercial
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contacto"
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#1C1917] text-white hover:bg-[#6D2128] rounded font-cinzel font-semibold text-xs text-center transition-colors shadow-xs"
                >
                  Consultar por esta Pieza
                </a>
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE8DB] border border-[#9E7B3B]/40 rounded font-serif text-xs text-[#1C1917] transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
