export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  piece: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Valentina Larraín',
    role: 'Coleccionista de Antigüedades',
    piece: 'Anillo de Compromiso Art Déco (1930)',
    quote: 'Encontré el anillo de mis sueños en su tienda. La atención personalizada y la historia del origen de la pieza me cautivaron por completo. Es una verdadera obra de arte en mi mano.'
  },
  {
    name: 'Andrés Cox',
    role: 'Cliente Frecuente',
    piece: 'Reloj de Bolsillo de Oro (Siglo XIX)',
    quote: 'Compré un reloj de bolsillo suizo para un regalo especial. Llegó impecable, funcionando a la perfección y con un certificado de autenticidad detallado. Un servicio excepcional.'
  },
  {
    name: 'Isabel Ossa',
    role: 'Restauración de Joyas',
    piece: 'Aros de Filigrana Familiar',
    quote: 'Llevé a restaurar unos aros de oro heredados de mi abuela que estaban muy desgastados. El trabajo de orfebrería fue soberbio; reforzaron el cierre y devolvieron el brillo original.'
  },

  // ═══════════════════════════════════════════════
  //  ↑  Agregás más testimonios acá arriba
  // ═══════════════════════════════════════════════
];
