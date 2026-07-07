export interface Product {
  id: string;
  name: string;
  category: 'artesanias' | 'antiguedades' | 'maquinas';
  description: string;
  image: string;
  badge?: string;
  isUnique: boolean;
}

export const products: Product[] = [
  // ─── ARTESANÍAS ───────────────────────────────
  {
    id: 'art-001',
    name: 'Collar de Perlas de Agua Dulce',
    category: 'artesanias',
    description: 'Perlas barrocas seleccionadas a mano, unidas por un delicado broche de plata esterlina 925.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
    badge: 'Artesanal',
    isUnique: false,
  },
  {
    id: 'art-002',
    name: 'Aros de Filigrana Tradicional',
    category: 'artesanias',
    description: 'Aros de plata de ley elaborados con la técnica de filigrana fina por artesanos locales.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600',
    badge: 'Popular',
    isUnique: false,
  },
  {
    id: 'art-003',
    name: 'Anillo Nido de Turquesa Antigua',
    category: 'artesanias',
    description: 'Turquesa natural de mina antigua engastada en un marco de plata envejecida cincelada.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
    badge: 'Pieza Única',
    isUnique: true,
  },
  {
    id: 'art-004',
    name: 'Collar Amuleto Ojo de Tigre',
    category: 'artesanias',
    description: 'Gema pulida de Ojo de Tigre montada sobre un bisel rústico y cadena fina de oro vermeil.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600',
    badge: 'Nuevo',
    isUnique: false,
  },
  {
    id: 'art-005',
    name: 'Aros Hojas de Oro de 18k',
    category: 'artesanias',
    description: 'Elegantes aros de diseño naturalista que emulan la forma de hojas de olivo con acabado satinado.',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600',
    badge: 'Lujo',
    isUnique: false,
  },

  // ─── ANTIGÜEDADES ─────────────────────────────
  {
    id: 'ant-001',
    name: 'Anillo de Compromiso Art Déco',
    category: 'antiguedades',
    description: 'Oro amarillo de 18k con un diamante central de corte brillante y detalles tallados a mano, circa 1930.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
    badge: 'Histórico',
    isUnique: true,
  },
  {
    id: 'ant-002',
    name: 'Reloj de Bolsillo Suizo del Siglo XIX',
    category: 'antiguedades',
    description: 'Reloj de oro de 14k con maquinaria a la vista y grabados florales en la tapa trasera.',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600',
    badge: 'Exclusivo',
    isUnique: true,
  },
  {
    id: 'ant-003',
    name: 'Cofre de Bronce Victoriano',
    category: 'antiguedades',
    description: 'Joyero victoriano de bronce macizo con relieves mitológicos e interior forrado en seda carmesí original, circa 1880.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600',
    badge: 'Pieza Única',
    isUnique: true,
  },

  // ─── MÁQUINAS DE ESCRIBIR ─────────────────────
  {
    id: 'maq-001',
    name: 'Olivetti Lettera 32',
    category: 'maquinas',
    description: 'Icónica máquina de escribir portátil italiana, completamente restaurada con cinta nueva y calibración precisa.',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600',
    badge: 'Restaurada',
    isUnique: true,
  },
  {
    id: 'maq-002',
    name: 'Underwood Standard No. 5',
    category: 'maquinas',
    description: 'Clásica máquina de escribir americana de principios del siglo XX, con teclado completo de 84 teclas.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600',
    badge: 'Histórico',
    isUnique: true,
  },

  // ═══════════════════════════════════════════════
  //  ↑  Acá arriba agregás más productos
  //  Ejemplo:
  //  {
  //    id: 'art-006',
  //    name: 'Pulsera de Plata con Ónix',
  //    category: 'artesanias',
  //    description: 'Pulsera artesanal con engarce de ónix negro y cierre de seguridad.',
  //    image: 'https://images.unsplash.com/photo-...',
  //    badge: 'Nuevo',
  //    isUnique: false,
  //  },
  // ═══════════════════════════════════════════════
];
