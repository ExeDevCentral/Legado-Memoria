export interface Restoration {
  before: string;
  after: string;
  model: string;
  year: string;
  description: string;
}

export const restorations: Restoration[] = [
  {
    before: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&auto=format',
    after: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format',
    model: 'Gargantilla de Plata Eduardiana',
    year: 'Circa 1905',
    description: 'Limpieza química especializada para remover oxidación centenaria, soldadura de microeslabones y pulido final de pátina controlada.'
  },
  {
    before: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format',
    after: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format',
    model: 'Anillo Solitario con Diamante',
    year: 'Década de 1940',
    description: 'Reconstrucción completa de las garras de sujeción desgastadas (re-engaste), pulido por electrólisis y abrillantado del oro amarillo de 18k.'
  },
  {
    before: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&auto=format',
    after: 'https://images.unsplash.com/photo-1641985899378-990ae6eb3c11?w=800&auto=format',
    model: 'Olivetti Lettera 32',
    year: 'Década de 1960',
    description: 'Restauración completa: desmontaje total, limpieza ultrasónica del mecanismo, enderezado de teclas, pulido de carcasa y reemplazo de rodillo de goma.'
  },

  // ═══════════════════════════════════════════════
  //  ↑  Agregás más antes/después acá arriba
  //  Las fotos "before" pueden ser las mismas URLs
  //  de Unsplash o las que subas
  // ═══════════════════════════════════════════════
];
