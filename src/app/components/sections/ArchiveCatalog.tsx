import { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Palette,
  Scroll,
  Cog,
  FileText,
  Landmark,
  Printer,
  Volume2,
  VolumeX,
  X,
  ShieldCheck,
  Layers,
  Sparkles,
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

  const categories = [
    { id: 'all', label: 'Toda la Colección', icon: Layers, count: ARCHIVE_ITEMS.length },
    { id: 'jarrones', label: '🏺 Jarrones & Cerámica de Época', icon: Sparkles, count: ARCHIVE_ITEMS.filter(i => i.category === 'jarrones').length },
    { id: 'libros', label: '📚 Libros Raros & Códices', icon: BookOpen, count: ARCHIVE_ITEMS.filter(i => i.category === 'libros').length },
    { id: 'arte', label: '🎨 Pintura & Bellas Artes', icon: Palette, count: ARCHIVE_ITEMS.filter(i => i.category === 'arte').length },
    { id: 'manuscritos', label: '📜 Manuscritos de Estado', icon: Scroll, count: ARCHIVE_ITEMS.filter(i => i.category === 'manuscritos').length },
    { id: 'maquinaria', label: '⚙️ Mecanismos & Relojería', icon: Cog, count: ARCHIVE_ITEMS.filter(i => i.category === 'maquinaria').length },
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-[#FAF6F0] border-b-2 border-[#D4AF37]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 shadow-xs mb-3">
            <BookOpen className="w-4 h-4 text-[#856428]" />
            <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase">
              Inventario &amp; Registro Curatorial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#1C1917] mb-4">
            Catálogo del Patrimonio
          </h2>
          <p className="text-lg font-serif text-[#57534E]">
            Examine las piezas históricas preservadas en este fondo privado. Cada ficha contiene datos de conservación, proveniencia y destino institucional de donación.
          </p>
        </div>

        {/* Search and Century Bar */}
        <div className="bg-[#FFFFFF] p-5 sm:p-7 rounded-2xl border-2 border-[#D4AF37]/35 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#856428]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por jarrones, libros, pinturas, autores o instituciones..."
                className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-xl text-base font-serif text-[#1C1917] placeholder-[#78716C] focus:outline-hidden focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#57534E] hover:text-[#1C1917] px-2 py-1"
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
                    className={`px-3.5 py-2 text-xs font-serif rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      selectedCentury === century
                        ? 'bg-[#1C1917] text-[#FAF7F2] font-bold shadow-xs'
                        : 'bg-[#F4EFE6] text-[#44403C] hover:bg-[#EFE8DB]'
                    }`}
                  >
                    {century === 'all' ? 'Todos los Siglos' : century}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs with Icons */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#EFE8DB] no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-serif font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#12100E] font-bold shadow-md'
                      : 'bg-[#FAF6F0] text-[#44403C] hover:bg-[#F4EFE6] border border-[#D4AF37]/30'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                    isSelected ? 'bg-[#12100E] text-[#D4AF37]' : 'bg-[#EFE8DB] text-[#57534E]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 px-1">
          <p className="text-sm font-serif text-[#57534E]">
            Mostrando <span className="font-bold text-[#1C1917]">{filteredItems.length}</span> piezas históricas
          </p>
          <div className="text-xs font-serif text-[#856428] font-medium">
            Registro Oficial del Fondo Patrimonial
          </div>
        </div>

        {/* Catalog Items Grid with 3D Hover & Luxury Gold Borders */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#FFFFFF] rounded-2xl border-2 border-[#D4AF37]/30 p-8 shadow-sm">
            <BookOpen className="w-14 h-14 text-[#D4AF37]/60 mx-auto mb-4" />
            <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-2">
              No se encontraron piezas con los filtros seleccionados
            </h3>
            <p className="text-sm font-serif text-[#57534E] max-w-md mx-auto mb-6">
              Intente con otros términos de búsqueda o seleccione "Toda la Colección".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedCentury('all'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-[#D4AF37] text-[#12100E] rounded-lg text-xs font-cinzel font-bold shadow-sm"
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
                className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-[#D4AF37]/35 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)] transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Image Showcase Container */}
                <div className="relative h-72 bg-[#12100E] overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.images.main}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-700 filter drop-shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Accession Code Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#12100E]/90 text-[#D4AF37] text-[11px] font-mono px-2.5 py-1 rounded tracking-wider border border-[#D4AF37]/40 shadow-xs">
                    {item.code}
                  </div>

                  {/* Century Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#FFFFFF]/95 text-[#6D2128] text-xs font-cinzel font-bold px-2.5 py-1 rounded shadow-xs border border-[#D4AF37]/30">
                    {item.century} · {item.year}
                  </div>

                  {/* Hover Floating Lens Prompt */}
                  <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3.5 py-1.5 bg-[#D4AF37] text-[#12100E] text-xs font-cinzel font-bold rounded shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Ficha &amp; Lupa 3.5x</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-serif font-bold text-[#856428]">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-serif text-[#2E6F40] font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {item.conservationBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel text-lg font-bold text-[#1C1917] group-hover:text-[#856428] transition-colors leading-snug mb-1">
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
                  <div className="pt-4 border-t border-[#EFE8DB] flex items-start gap-2.5 text-xs font-serif text-[#44403C]">
                    <Landmark className="w-4 h-4 text-[#856428] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#78716C] block text-[10px] uppercase font-cinzel font-bold">Destino de Donación Previsto:</span>
                      <span className="font-bold text-[#1C1917]">{item.destinationInstitution}</span>
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
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0E0C0A]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] w-full max-w-5xl rounded-2xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-[#1C1917]">
            {/* Modal Header */}
            <div className="bg-[#141210] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b-2 border-[#D4AF37]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#12100E] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#D4AF37] tracking-wider block">
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
                  className="px-3.5 py-1.5 bg-[#221E1A] hover:bg-[#332D27] border border-[#D4AF37]/50 text-[#FAF7F2] rounded-lg text-xs font-serif flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Imprimir Ficha"
                >
                  <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="hidden sm:inline">Imprimir Ficha</span>
                </button>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-[#D4AF37] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: High-Res Image Showcase */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/40 bg-[#12100E] shadow-inner aspect-[4/3] flex items-center justify-center p-3">
                    <img
                      src={activeDetailImage || activeItem.images.main}
                      alt={activeItem.title}
                      className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#12100E]/90 text-[#D4AF37] text-[10px] font-mono px-2.5 py-1 rounded border border-[#D4AF37]/30">
                      Registro de Conservación
                    </div>
                  </div>

                  {/* Detail Thumbnails */}
                  {activeItem.images.details.length > 0 && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveDetailImage(activeItem.images.main)}
                        className={`h-16 w-20 rounded-lg border-2 overflow-hidden bg-[#12100E] p-1 transition-all ${
                          activeDetailImage === activeItem.images.main
                            ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40'
                            : 'border-[#EFE8DB] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={activeItem.images.main} alt="Vista General" className="w-full h-full object-contain" />
                      </button>
                      {activeItem.images.details.map((detailUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveDetailImage(detailUrl)}
                          className={`h-16 w-20 rounded-lg border-2 overflow-hidden bg-[#12100E] p-1 transition-all ${
                            activeDetailImage === detailUrl
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40'
                              : 'border-[#EFE8DB] opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={detailUrl} alt={`Detalle ${idx + 1}`} className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Audio Narrative Player */}
                  {activeItem.audioNarrative && (
                    <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#D4AF37]/40 flex items-center justify-between gap-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[#FAF7F2] text-[#856428] border border-[#D4AF37]/40">
                          <Volume2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-cinzel text-xs font-bold text-[#1C1917] block">
                            Relato Curatorial Narrado
                          </span>
                          <span className="text-xs font-serif text-[#57534E]">
                            Locución pausada para adultos mayores
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleAudioNarrative(activeItem.audioNarrative || '')}
                        className="px-4 py-2 bg-[#D4AF37] text-[#12100E] hover:bg-[#B8860B] rounded-lg text-xs font-cinzel font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
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
                      <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#856428] font-cinzel text-xs font-bold rounded-lg border border-[#D4AF37]/40">
                        {activeItem.categoryLabel}
                      </span>
                      <span className="px-3 py-1 bg-[#6D2128]/10 text-[#6D2128] font-serif text-xs font-bold rounded-lg">
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
                    <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#EFE8DB] space-y-2.5 text-xs font-serif mb-4 shadow-xs">
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel font-semibold">Autor / Creador:</span>
                        <span className="col-span-2 font-bold text-[#1C1917]">{activeItem.author}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel font-semibold">Fecha / Época:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.year} ({activeItem.century})</span>
                      </div>
                      {activeItem.dimensions && (
                        <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                          <span className="text-[#78716C] font-cinzel font-semibold">Dimensiones:</span>
                          <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.dimensions}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel font-semibold">Materiales:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.materials}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1 border-b border-[#FAF7F2]">
                        <span className="text-[#78716C] font-cinzel font-semibold">Procedencia:</span>
                        <span className="col-span-2 font-medium text-[#1C1917]">{activeItem.provenance}</span>
                      </div>
                      <div className="grid grid-cols-3 py-1">
                        <span className="text-[#78716C] font-cinzel font-semibold">Conservación:</span>
                        <span className="col-span-2 font-bold text-[#2E6F40] flex items-center gap-1">
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
                      <p className="text-sm font-serif text-[#57534E] leading-relaxed italic bg-[#F4EFE6] p-3 rounded-lg border-l-3 border-[#D4AF37]">
                        "{activeItem.historicalContext}"
                      </p>
                    </div>
                  </div>

                  {/* Destination Institution Box */}
                  <div className="p-4 bg-[#FFFFFF] rounded-xl border-2 border-[#D4AF37]/50 shadow-xs">
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
              <div className="text-xs font-serif text-[#57534E]">
                Registro del Fondo Patrimonial Privado · No Comercial
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contacto"
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#1C1917] text-white hover:bg-[#6D2128] rounded-lg font-cinzel font-bold text-xs text-center transition-colors shadow-xs"
                >
                  Consultar por esta Pieza
                </a>
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE8DB] border border-[#D4AF37]/40 rounded-lg font-serif text-xs text-[#1C1917] transition-colors cursor-pointer"
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
