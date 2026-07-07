export interface Guarantee {
  name: string;
  icon: string;
  highlight: boolean;
  description: string;
}

export const guarantees: Guarantee[] = [
  {
    name: 'Oro & Plata Certificados',
    icon: 'Gem',
    highlight: true,
    description: 'Garantizamos la pureza y ley de los metales nobles (Oro 18k y Plata 925) de cada pieza.'
  },
  {
    name: 'Historia Documentada',
    icon: 'History',
    highlight: false,
    description: 'Cada antigüedad incluye una ficha sobre su procedencia histórica y época.'
  },
  {
    name: 'Orfebrería Artesanal',
    icon: 'Award',
    highlight: false,
    description: 'Manufactura hecha a mano, rescatando técnicas y acabados de la joyería clásica.'
  },
  {
    name: 'Envíos Asegurados',
    icon: 'Truck',
    highlight: false,
    description: 'Despachos a todo el país con seguro de transporte integrado para resguardar tu compra.'
  },
  {
    name: 'Ajuste de Talla Gratis',
    icon: 'Star',
    highlight: false,
    description: 'En anillos seleccionados, el primer ajuste de medida es totalmente gratuito.'
  },
  {
    name: 'Compra Protegida',
    icon: 'ShieldCheck',
    highlight: false,
    description: 'Pasarela segura de transacciones y cambios garantizados en un plazo de 15 días.'
  },
];
