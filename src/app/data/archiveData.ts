export interface ArchiveItem {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  category: 'jarrones' | 'libros' | 'arte' | 'manuscritos' | 'maquinaria';
  categoryLabel: string;
  century: 'Siglo XVII' | 'Siglo XVIII' | 'Siglo XIX' | 'Siglo XX';
  year: string;
  author: string;
  provenance: string;
  dimensions?: string;
  materials: string;
  conservationState: string;
  conservationBadge: 'Excelente' | 'Restauración Preventiva' | 'Conservación Histórica';
  description: string;
  historicalContext: string;
  destinationInstitution: string;
  images: {
    main: string;
    details: string[];
  };
  audioNarrative?: string;
  tags: string[];
  featured?: boolean;
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  // ─── JARRONES Y CERÁMICA HISTÓRICA ──────────────────────────
  {
    id: 'jar-001',
    code: 'CPH-CER-1720-01',
    title: 'Urna Barroca & Jarrón Colonial con Pan de Oro',
    subtitle: 'Porcelana policromada con molduras en oro fino de 22k y escenas mitológicas clásicas',
    category: 'jarrones',
    categoryLabel: 'Jarrones & Cerámica de Época',
    century: 'Siglo XVIII',
    year: 'c. 1720–1750',
    author: 'Taller Virreinal / Manufactura Real',
    provenance: 'Antigua hacienda señorial del Valle de Aconcagua; resguardado por familia de la aristocracia chilena.',
    dimensions: '68.0 × 38.0 × 26.0 cm | Peso: 9.4 kg',
    materials: 'Porcelana dura cocida a alta temperatura, esmaltes al fuego al óxido de cobalto, aplicaciones de bronce ormolu y dorados al mercurio.',
    conservationState: 'Cuerpo cerámico 100% íntegro, sin fracturas ni fisuras térmicas. Limpieza de pátina oxidada en molduras doradas.',
    conservationBadge: 'Excelente',
    description: 'Magnífica pieza ornamental de gran valor decorativo e histórico. Representa en su cartela central una escena alegórica del triunfo de las artes rodeada de festones y mascarones dorados.',
    historicalContext: 'Importada a través de las rutas comerciales del Virreinato para presidir los salones de honor de las familias fundacionales de Chile.',
    destinationInstitution: 'Museo Nacional de Bellas Artes / Museo de Artes Decorativas de Santiago',
    images: {
      main: '/images/antique-vase.jpg',
      details: [
        'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&auto=format',
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Esta urna barroca con pan de oro representa la suntuosidad de los salones coloniales chilenos del siglo dieciocho, conservada con su policromía original intacta.',
    tags: ['Jarrones', 'Cerámica', 'Porcelana', 'Barroco', 'Pan de Oro', 'Siglo XVIII'],
    featured: true
  },
  {
    id: 'jar-002',
    code: 'CPH-CER-1785-02',
    title: 'Tibor Colonial de Talavera con Escudo Nobiliario',
    subtitle: 'Cerámica mayólica esmaltada en blanco y azul cobalto con tapa piramidal',
    category: 'jarrones',
    categoryLabel: 'Jarrones & Cerámica de Época',
    century: 'Siglo XVIII',
    year: '1785',
    author: 'Maestros Cerámicos de la Nueva España (Puebla / Importación Virreinal)',
    provenance: 'Residencia de los Marqueses de Larraín en Santiago; donado en custodia en 1974.',
    dimensions: '54.0 × 32.0 cm',
    materials: 'Arcilla decantada, vidriado estannífero, óxido de cobalto y manganeso.',
    conservationState: 'Esmalte brillante sin craquelado activo. Asentamiento en base con fieltro de conservación libre de ácidos.',
    conservationBadge: 'Excelente',
    description: 'Ejemplar cimero de la cerámica virreinal que llegó a Chile a fines del siglo XVIII. El motivo central exhibe el escudo de armas familiar entre motivos de grutescos y follaje andino.',
    historicalContext: 'Muestra fehaciente del floreciente intercambio cultural y artístico entre los virreinatos americanos y el Reino de Chile.',
    destinationInstitution: 'Museo Histórico Nacional — Colección de Artes y Oficios Coloniales',
    images: {
      main: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&auto=format',
      details: [
        '/images/antique-vase.jpg',
      ]
    },
    audioNarrative: 'El tibor de Talavera del siglo dieciocho sintetiza la tradición cerámica hispanoamericana con su inconfundible azul cobalto sobre blanco estannífero.',
    tags: ['Talavera', 'Tibor', 'Mayólica', 'Colonia', 'Cobalto']
  },

  // ─── LIBROS ANTIGUOS Y PRIMERAS EDICIONES ──────────────────
  {
    id: 'lib-000',
    code: 'CPH-LIB-1600-00',
    title: 'Misal Iluminado & Códice en Latín con Pan de Oro',
    subtitle: 'Manuscrito litúrgico sobre vitela con capitulares historadas y orlas de acanto en oro batido',
    category: 'libros',
    categoryLabel: 'Libros Raros & Manuscritos Iluminados',
    century: 'Siglo XVII',
    year: 'c. 1600–1620',
    author: 'Scriptorium Conventual Franciscano / Taller Romano',
    provenance: 'Antiguo fondo sacro del Convento Máximo de San Francisco de Santiago de Chile.',
    dimensions: '36.0 × 26.0 × 7.5 cm (Gran Códice en Folio)',
    materials: 'Pergamino de vitela purísima, pan de oro al agua pulido con ágata, tintas minerales de lapislázuli y bermellón, encuadernación en tabla de roble forrada en piel repujada con cantoneras y broches de latón forjado.',
    conservationState: 'Pigmentos estables y luminosos. Folios desinsectados y estabilizados con microcápsulas de humedad controlada.',
    conservationBadge: 'Excelente',
    description: 'Incomparable tesoro del arte del libro antiguo. Cada página presenta letras capitulares miniadas en pan de oro bruñido y ricas orlas vegetales entrelazadas.',
    historicalContext: 'Utilizado en las ceremonias solemnes de la Real Audiencia y la Catedral de Santiago durante el Chile colonial temprano.',
    destinationInstitution: 'Biblioteca Nacional de Chile — Sala Medina / Archivo Histórico Sacro',
    images: {
      main: '/images/ancient-book.jpg',
      details: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format',
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Este códice iluminado de comienzos del siglo diecisiete refleja el esplendor del arte del libro sacro, con pan de oro brillante y lapislázuli de intacta pureza.',
    tags: ['Códice', 'Iluminado', 'Pan de Oro', 'Siglo XVII', 'Incunable'],
    featured: true
  },
  {
    id: 'lib-001',
    code: 'CPH-LIB-1646-01',
    title: 'Histórica Relación del Reyno de Chile',
    subtitle: 'Edición Príncipe de Roma con grabados xilográficos y calcográficos',
    category: 'libros',
    categoryLabel: 'Libros Raros & Manuscritos Iluminados',
    century: 'Siglo XVII',
    year: '1646',
    author: 'P. Alonso de Ovalle, S.J.',
    provenance: 'Antigua biblioteca conventual de San Francisco de Santiago; colección particular adquirida en 1968.',
    dimensions: '31.5 × 22.0 × 5.2 cm (Folio menor)',
    materials: 'Papel de trapo con filigrana romana, encuadernación en pergamino a la romana con nervios vistos y cierres de vitela.',
    conservationState: 'Ejemplar íntegro, libre de acidez activa. Restauración preventiva realizada en 1994 con papel japonés y engrudo de almidón de trigo purificado.',
    conservationBadge: 'Excelente',
    description: 'La obra cumbre de la historiografía colonial chilena. Contiene el mapa plegable del Reino de Chile y las 21 láminas con retratos de gobernadores e insignias de ciudades fundacionales.',
    historicalContext: 'Impreso en Roma por Francesco Cavallo en 1646 para dar a conocer en Europa la geografía, botánica y sociedad del Chile del siglo XVII.',
    destinationInstitution: 'Biblioteca Nacional de Chile — Sala Medina / Fondo Patrimonial',
    images: {
      main: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format',
      details: [
        '/images/ancient-book.jpg',
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format',
      ]
    },
    audioNarrative: 'La Histórica Relación del Padre Ovalle constituye el primer monumento bibliográfico de Chile. Esta edición de 1646 conserva intacto su mapa desplegable y sus ricas xilografías.',
    tags: ['Colonia', 'Crónica', 'Grabados', 'Jesuita', 'Primeras Ediciones']
  },
  {
    id: 'lib-002',
    code: 'CPH-LIB-1776-02',
    title: 'La Araucana de D. Alonso de Ercilla y Zúñiga',
    subtitle: 'Edición ilustrada de la Real Imprenta de D. Antonio de Sancha',
    category: 'libros',
    categoryLabel: 'Libros Raros & Manuscritos Iluminados',
    century: 'Siglo XVIII',
    year: '1776',
    author: 'Alonso de Ercilla y Zúñiga (Ed. Sancha)',
    provenance: 'Biblioteca del Conde de Quinta Alegre (Santiago); custodia ininterrumpida en gabinete privado.',
    dimensions: '20.5 × 13.5 × 3.8 cm (Dos tomos en octavo)',
    materials: 'Encuadernación en pasta española de época, lomo con tejuelos en marroquín rojo y dorados finos al fuego.',
    conservationState: 'Cuerpo de texto en impecable estado de blancura natural. Cortes pintados al agua con motas rojas y doradas.',
    conservationBadge: 'Excelente',
    description: 'La más bella edición dieciochesca del poema épico fundacional de Chile, editada en Madrid por Antonio de Sancha con retrato del autor grabado en cobre por Moreno Tejada.',
    historicalContext: 'Publicada durante la Ilustración española como homenaje tipográfico a la máxima epopeya poética del Nuevo Mundo.',
    destinationInstitution: 'Museo Histórico Nacional — Archivo Bibliográfico de la Colonia',
    images: {
      main: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Esta edición de Antonio de Sancha de 1776 representa la cúspide del arte tipográfico español del siglo XVIII puesto al servicio de la epopeya de Ercilla.',
    tags: ['Épica', 'Poesía', 'Ilustración', 'Madrid', 'Sancha']
  },
  {
    id: 'lib-003',
    code: 'CPH-LIB-1854-03',
    title: 'Atlas de la Historia Física y Política de Chile',
    subtitle: 'Dos tomos con láminas litográficas coloreadas a mano de botánica, zoología y vistas costeras',
    category: 'libros',
    categoryLabel: 'Libros Raros & Manuscritos Iluminados',
    century: 'Siglo XIX',
    year: '1854',
    author: 'Claudio Gay',
    provenance: 'Encargado por suscripción del Gobierno de Chile en París; fondo familiar diplomático.',
    dimensions: '52.0 × 36.0 × 6.5 cm (Gran Folio Atlas)',
    materials: 'Litografías sobre papel vitela pesante, iluminadas primorosamente a mano con acuarelas originales de época.',
    conservationState: 'Láminas desacidificadas, colores minerales vivos con brillo original. Encuadernación con hierros dorados del Escudo de la República de Chile.',
    conservationBadge: 'Excelente',
    description: 'Monumento del naturalismo decimonónico chileno. Contiene 315 láminas litografiadas por los mejores grabadores de París bajo la estricta dirección científica de Claudio Gay.',
    historicalContext: 'Obra comisionada por el Estado chileno bajo el gobierno de Joaquín Prieto y Manuel Bulnes para fundar el conocimiento científico del territorio nacional.',
    destinationInstitution: 'Museo Nacional de Historia Natural / Biblioteca Nacional',
    images: {
      main: 'https://images.unsplash.com/photo-1532012164546-f432f2e3ddb5?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format',
      ]
    },
    audioNarrative: 'El Atlas de Claudio Gay sintetiza la flora, fauna y paisajes del Chile republicano con un virtuosismo cromático insuperable.',
    tags: ['Historia Natural', 'Botánica', 'Litografía', 'República', 'Claudio Gay']
  },
  {
    id: 'lib-004',
    code: 'CPH-LIB-1922-04',
    title: 'Desolación — Primera Edición con Dedicatoria Autógrafa',
    subtitle: 'Edición del Instituto de las Españas en los Estados Unidos (Nueva York, 1922)',
    category: 'libros',
    categoryLabel: 'Libros Raros & Manuscritos Iluminados',
    century: 'Siglo XX',
    year: '1922',
    author: 'Gabriela Mistral (Lucila Godoy Alcayaga)',
    provenance: 'Dedicado por la autora al educador Pedro Aguirre Cerda; conservado por línea familiar directa.',
    dimensions: '19.0 × 12.8 × 2.0 cm',
    materials: 'Rústica editorial original con sobrecubierta de papel verjurado, tipografía en tinta bistre.',
    conservationState: 'Caja de conservación en tela de lino neutro confeccionada a medida. Firma y dedicatoria manuscrita en tinta ferrogálica con perfecta legibilidad.',
    conservationBadge: 'Conservación Histórica',
    description: 'Primer libro publicado por Gabriela Mistral. Esta copia contiene una sentida dedicatoria manuscrita fechada en México en 1923 previa a su consagración con el Premio Nobel.',
    historicalContext: 'Publicado gracias a la iniciativa del profesor Federico de Onís y maestros hispanistas en la Universidad de Columbia, Nueva York.',
    destinationInstitution: 'Biblioteca Nacional de Chile — Archivo del Escritor / Sala Gabriela Mistral',
    images: {
      main: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Desolación abrió las puertas de la literatura universal a Gabriela Mistral. Esta copia única atesora la tinta viva de nuestra Premio Nobel.',
    tags: ['Poesía', 'Nobel', 'Manuscrito', 'Siglo XX', 'Gabriela Mistral']
  },

  // ─── OBRAS DE ARTE Y PINTURA CLÁSICA ─────────────────────────
  {
    id: 'art-001',
    code: 'CPH-ART-1887-01',
    title: 'Retrato Señorial de Época Republicana',
    subtitle: 'Óleo sobre tela de gran formato con marco de moldura dorada al pan de oro',
    category: 'arte',
    categoryLabel: 'Pintura & Obras de Arte Clásicas',
    century: 'Siglo XIX',
    year: '1887',
    author: 'Pedro Lira Rencoret (1845–1912)',
    provenance: 'Residencia señorial en la Alameda de las Delicias (Santiago); pinacoteca privada.',
    dimensions: '118.0 × 88.5 cm (Con marco: 142.0 × 112.0 cm)',
    materials: 'Óleo sobre lienzo de lino de trama densa; marco original de madera tallada dorada al agua con oro fino de 22 quilates.',
    conservationState: 'Capa pictórica estable con barniz dammar purificado aplicado en 2002. Sin repintes invasivos.',
    conservationBadge: 'Excelente',
    description: 'Magistral retrato psicológico que sintetiza el virtuosismo académico del maestro Pedro Lira, cofundador de la Unión Artística y director de la Escuela de Bellas Artes.',
    historicalContext: 'Pintado en Santiago tras el retorno de Lira de su estancia formativa en los talleres de París.',
    destinationInstitution: 'Museo Nacional de Bellas Artes (MNBA) / Pinacoteca de Concepción',
    images: {
      main: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Pedro Lira despliega en este retrato la maestría del claroscuro y la dignidad solemne de la sociedad chilena de fines del siglo XIX.',
    tags: ['Pintura', 'Óleo', 'Maestros Chilenos', 'Pedro Lira', 'Siglo XIX'],
    featured: true
  },
  {
    id: 'art-002',
    code: 'CPH-ART-1896-02',
    title: 'Fragata en el Paso Drake hacia Valparaíso',
    subtitle: 'Marina al óleo capturando la bravura del Océano Austral',
    category: 'arte',
    categoryLabel: 'Pintura & Obras de Arte Clásicas',
    century: 'Siglo XIX',
    year: '1896',
    author: 'Thomas Somerscales (1842–1927)',
    provenance: 'Encargo particular en Valparaíso; preservado por tres generaciones en gabinete marítimo.',
    dimensions: '75.0 × 110.0 cm',
    materials: 'Óleo sobre tela montada sobre bastidor de pino oregón con cuñas de tensión originales.',
    conservationState: 'Limpieza superficial de barniz oxidado realizada con disolventes suaves de pH neutro. Tela con tensión óptima.',
    conservationBadge: 'Excelente',
    description: 'Excepcional testimonio de la pintura marinista chilena. Somerscales representa el juego lumínico de las olas del Pacífico sur con una fidelidad náutica sin parangón.',
    historicalContext: 'Creado durante la madurez artística del pintor inglés radicado en Chile, quien formó a generaciones de artistas en Valparaíso y Santiago.',
    destinationInstitution: 'Museo Marítimo Nacional de Valparaíso / Museo Nacional de Bellas Artes',
    images: {
      main: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&auto=format',
      ]
    },
    audioNarrative: 'La marina de Somerscales traslada la atmósfera salina y la luz oceánica de las costas chilenas con una precisión poética y documental.',
    tags: ['Marina', 'Valparaíso', 'Somerscales', 'Pacífico', 'Óleo']
  },
  {
    id: 'art-003',
    code: 'CPH-ART-1915-03',
    title: 'Caserío Colonial y Almendros en Flor',
    subtitle: 'Óleo sobre tabla de pincelada libre y empaste matérico',
    category: 'arte',
    categoryLabel: 'Pintura & Obras de Arte Clásicas',
    century: 'Siglo XX',
    year: '1915',
    author: 'Juan Francisco González (1853–1933)',
    provenance: 'Adquirido directamente del taller del maestro en Melipilla; colección señorial.',
    dimensions: '42.0 × 55.0 cm',
    materials: 'Óleo matérico sobre panel de madera noble de cedro tratada.',
    conservationState: 'Empaste original intacto, sin desprendimientos. Montado en marco colonial de madera tallada a mano.',
    conservationBadge: 'Excelente',
    description: 'Uno de los cuatro grandes maestros de la pintura chilena. Esta obra plasma con vehemencia y síntesis lumínica la vida campestre y la arquitectura colonial de la zona central de Chile.',
    historicalContext: 'Pintura representativa del proto-impresionismo chileno y de la búsqueda de la identidad del paisaje criollo.',
    destinationInstitution: 'Museo O\'Higginiano y de Bellas Artes de Talca / MNBA',
    images: {
      main: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Juan Francisco González sintetiza en este óleo la luz vibrante del campo chileno mediante trazos rápidos y empastes de pura emoción visual.',
    tags: ['Grandes Maestros', 'Paisaje', 'Impresionismo', 'Juan Francisco González']
  },

  // ─── MANUSCRITOS Y DOCUMENTOS HISTÓRICOS ────────────────────
  {
    id: 'man-001',
    code: 'CPH-DOC-1818-01',
    title: 'Proclama Original de la Independencia de Chile',
    subtitle: 'Bando impreso con rúbricas originales de Estado y sello de lacre rojo de la Patria Nueva',
    category: 'manuscritos',
    categoryLabel: 'Manuscritos & Documentos Históricos',
    century: 'Siglo XIX',
    year: '1818',
    author: 'Directorio Supremo del Estado de Chile (Bernardo O\'Higgins)',
    provenance: 'Archivo de la antigua Secretaría de Guerra y Marina; preservado por linaje de edecanes republicanos.',
    dimensions: '44.0 × 31.0 cm',
    materials: 'Papel de trapo con filigrana de escudo patrio primitivo, tinta ferrogálica y sello en lacre español de cinabrio.',
    conservationState: 'Estabilizado en carpeta de conservación libre de lignina y montado en paspartú museológico con cristal UV al 99%.',
    conservationBadge: 'Restauración Preventiva',
    description: 'Documento fundacional del Estado de Chile. Contiene el texto solemne de la Declaración de la Independencia jurada en Talca y Santiago en febrero de 1818.',
    historicalContext: 'Emitido tras la victoria patriota para proclamar ante las naciones del orbe la soberanía e independencia irrevocable de Chile.',
    destinationInstitution: 'Archivo Nacional Histórico de Chile / Museo Histórico Nacional',
    images: {
      main: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Este bando original de 1818 constituye el acta de nacimiento de la República de Chile, con el sello intacto en lacre de la Patria Nueva.',
    tags: ['Independencia', 'O\'Higgins', 'República', 'Lacre', 'Manuscrito'],
    featured: true
  },
  {
    id: 'man-002',
    code: 'CPH-DOC-1823-02',
    title: 'Epistolario Reservado de D. Bernardo O\'Higgins',
    subtitle: 'Tres cartas autógrafas dirigidas a D. Ramón Freire desde su exilio en Montalbán',
    category: 'manuscritos',
    categoryLabel: 'Manuscritos & Documentos Históricos',
    century: 'Siglo XIX',
    year: '1823–1825',
    author: 'Capitán General Bernardo O\'Higgins Riquelme',
    provenance: 'Colección epistolar de la familia Freire-Serrano; resguardado en cofre de cedro.',
    dimensions: '28.5 × 21.5 cm cada pliego (3 pliegos dobles)',
    materials: 'Papel verjurado inglés Whatman con filigrana de 1820, escritura manuscrita con pluma de ave en tinta de nuez de agalla.',
    conservationState: 'Tratamiento de neutralización de tintas ferrogálicas concluido con éxito. Sin oxidación periférica.',
    conservationBadge: 'Excelente',
    description: 'Reflexiones íntimas y estratégicas del Libertador O\'Higgins sobre el porvenir de las instituciones republicanas chilenas, la organización del Congreso y la unidad americana.',
    historicalContext: 'Redactadas durante sus primeros años de ostracismo en la hacienda de Montalbán, Perú.',
    destinationInstitution: 'Archivo Central Andrés Bello / Museo Histórico Nacional',
    images: {
      main: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&auto=format',
      ]
    },
    audioNarrative: 'La caligrafía firme y reflexiva de Bernardo O\'Higgins en estas cartas revela la lucidez de su pensamiento constitucional en el exilio.',
    tags: ['Cartas', 'Epistolario', 'O\'Higgins', 'Historia Política']
  },

  // ─── MAQUINARIA Y MECANISMOS HISTÓRICOS ─────────────────────
  {
    id: 'maq-001',
    code: 'CPH-MAQ-1888-01',
    title: 'Remington Standard No. 2',
    subtitle: 'La pionera de la escritura mecánica con mecanismo de golpe bajo (Understrike)',
    category: 'maquinaria',
    categoryLabel: 'Maquinaria & Mecanismos Históricos',
    century: 'Siglo XIX',
    year: 'c. 1888',
    author: 'E. Remington & Sons (Ilion, Nueva York)',
    provenance: 'Utilizada en la Intendencia de Santiago durante la administración de Benjamín Vicuña Mackenna; custodia patrimonial privada.',
    dimensions: '33.0 × 38.0 × 28.0 cm | Peso: 14.2 kg',
    materials: 'Hierro fundido esmaltado al fuego en negro brillante, calcomanías originales en pan de oro, teclas de nácar y celuloide.',
    conservationState: 'Mecanismo cinemático 100% operativo. Conservación pasivante de metales nobles y lubricación con micro-aceites sintéticos de grado relojero.',
    conservationBadge: 'Excelente',
    description: 'La máquina que transformó la administración pública mundial e introdujo el teclado QWERTY en las secretarías de Estado de Chile.',
    historicalContext: 'Importada a Chile a fines del siglo XIX para modernizar la redacción de leyes, actas del Senado y correspondencia diplomática.',
    destinationInstitution: 'Museo Histórico Nacional — Colección de Tecnología y Sociedad',
    images: {
      main: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&auto=format',
      ]
    },
    audioNarrative: 'La Remington Standard Número 2 es una joya de la ingeniería mecánica del siglo diecinueve, portadora del inicio de la era tipográfica moderna.',
    tags: ['Remington', 'Mecanismo', 'Siglo XIX', 'QWERTY', 'Tecnología'],
    featured: true
  },
  {
    id: 'maq-002',
    code: 'CPH-MAQ-1912-02',
    title: 'Underwood Standard No. 5 en Mueble de Roble',
    subtitle: 'El modelo canónico de la mecanografía del siglo XX con carro flotante y tabulador decimonónico',
    category: 'maquinaria',
    categoryLabel: 'Maquinaria & Mecanismos Históricos',
    century: 'Siglo XX',
    year: '1912',
    author: 'Underwood Typewriter Company (Hartford, Connecticut)',
    provenance: 'Despacho de Rectoría de la Universidad de Chile; entregada en honor de servicio en 1955.',
    dimensions: '30.0 × 36.0 × 24.0 cm | Peso: 13.8 kg',
    materials: 'Acero templado pavonado, piezas niqueladas al espejo, rodillo de caucho vulcanizado original preservado con elastómeros de grado conservación.',
    conservationState: 'Calibración milimétrica de barras portatipos. Tipos de letra limpios con definición impecable en cinta bicolor.',
    conservationBadge: 'Excelente',
    description: 'Considerada por los historiadores industriales como la máquina de escribir más influyente de todos los tiempos. Redactó discursos, novelas y documentos cumbres de la historia republicana chilena.',
    historicalContext: 'Presente en los despachos ministeriales y gabinetes letrados de Chile a lo largo de las primeras décadas del siglo XX.',
    destinationInstitution: 'Museo de la Educación Gabriela Mistral / Archivo Patrimonial',
    images: {
      main: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1200&auto=format',
      ]
    },
    audioNarrative: 'La Underwood 5 definió la estética y el sonido inconfundible de las salas de redacción y los despachos literarios del siglo veinte.',
    tags: ['Underwood', 'Tipografía', 'Siglo XX', 'Universidad de Chile']
  },
  {
    id: 'maq-003',
    code: 'CPH-MAQ-1892-03',
    title: 'Telescopio Náutico y Sextante de Precisión de Latón',
    subtitle: 'Instrumental científico de navegación astronómica utilizado en la cartografía de canales australes',
    category: 'maquinaria',
    categoryLabel: 'Maquinaria & Mecanismos Históricos',
    century: 'Siglo XIX',
    year: '1892',
    author: 'Troughton & Simms (Londres) — Para la Armada de Chile',
    provenance: 'Comisión Hidrográfica de Magallanes; resguardo particular de descendientes de oficiales navales.',
    dimensions: 'Sextante: 32.0 × 28.0 cm en caja de caoba | Telescopio: 85.0 cm extensible',
    materials: 'Latón macizo dorado al mercurio, óptica acromática de vidrio flint, escalas de plata grabadas con vernier micrométrico.',
    conservationState: 'Espejos de horizonte azogados y lentes libres de hongos. Mecanismo de tornillo sin fin con desplazamiento suave.',
    conservationBadge: 'Excelente',
    description: 'Instrumental científico de alta exactitud con el que se trazaron las cartas náuticas del Estrecho de Magallanes y el Cabo de Hornos a fines del siglo XIX.',
    historicalContext: 'Piezas fundamentales en la afirmación de la soberanía y la ciencia geográfica chilena en el extremo austral.',
    destinationInstitution: 'Museo Marítimo Nacional / Museo de la Patagonia Mayor Arteaga',
    images: {
      main: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&auto=format',
      details: [
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format',
      ]
    },
    audioNarrative: 'Con este sextante y telescopio se fijaron las estrellas y las costas de la Patagonia chilena durante las audaces expediciones del siglo diecinueve.',
    tags: ['Navegación', 'Ciencia', 'Astronomía', 'Magallanes', 'Latón']
  }
];

export interface TimelineEra {
  era: string;
  period: string;
  title: string;
  description: string;
  piecesCount: number;
  highlightItem: string;
}

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    era: 'Colonia & Virreinato',
    period: '1600 – 1810',
    title: 'Las Raíces Documentales del Reino de Chile',
    description: 'Crónicas jesuitas, códices iluminados, tibores de Talavera y cartografía temprana que testimonian el florecimiento cultural y la fundación de las ciudades chilenas.',
    piecesCount: 18,
    highlightItem: 'Misal Iluminado (1600) & Urna Barroca Colonial (1720)'
  },
  {
    era: 'Independencia & Patria Nueva',
    period: '1810 – 1830',
    title: 'La Forja de la República y sus Próceres',
    description: 'Proclamas impresas bajo fuego, correspondencia autógrafa de O\'Higgins y decretos de la organización del Estado soberano.',
    piecesCount: 22,
    highlightItem: 'Bando Original de la Independencia (1818)'
  },
  {
    era: 'Expansión Republicana & Siglo XIX',
    period: '1830 – 1900',
    title: 'Ciencia, Arte y Modernización Institucional',
    description: 'El Atlas de Claudio Gay, óleos maestros de Pedro Lira, instrumental náutico de Magallanes y las primeras máquinas de escribir que modernizaron las leyes de la Nación.',
    piecesCount: 42,
    highlightItem: 'Retrato de Pedro Lira & Remington Standard No. 2'
  },
  {
    era: 'Siglo XX & Círculo de las Letras',
    period: '1900 – 1960',
    title: 'Vanguardias Literarias y Grandes Pintores',
    description: 'Primeras ediciones de los Premios Nobel chilenos con dedicatorias manuscritas y obras cumbres del paisaje matérico.',
    piecesCount: 31,
    highlightItem: 'Desolación de Gabriela Mistral (1922)'
  }
];

export const INSTITUTIONAL_CONFIG = {
  collectionName: 'Colección Patrimonial & Archivo Histórico',
  curatorTitle: 'Custodia & Preservación Privada',
  subtitle: 'Fondo histórico bibliográfico, artístico y documental destinado a donación institucional en Chile',
  phone: '+56 9 5409 5465',
  phoneDisplay: '+56 9 5409 5465',
  email: 'archivo.patrimonial.chile@gmail.com',
  location: 'Santiago de Chile — Coordinación de Visitas Institucionales',
  institutionalNote: 'Esta colección se conserva con fines estrictamente culturales, académicos y filantrópicos. No constituye un catálogo comercial ni de venta al público.',
  donorProfile: {
    title: 'Un Legado al Servicio de la Memoria Nacional',
    description: 'A lo largo de más de sesenta años de búsqueda metódica y rigurosa custodia, esta colección ha reunido piezas cardinales del acervo cultural chileno. Su propósito final y solemne es su traspaso a museos públicos, bibliotecas patrimoniales y archivos universitarios del país, garantizando el acceso abierto a investigadores, estudiantes y a toda la ciudadanía.',
  }
};
