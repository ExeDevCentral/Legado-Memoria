import type { LucideIcon } from 'lucide-react';

/**
 * Enlace de navegación para el Navbar.
 * `sectionId` corresponde al atributo `id` del elemento HTML destino.
 */
export interface NavLink {
  label: string;
  sectionId: string;
}

/**
 * Tarjeta de servicio para la sección de servicios.
 * `description` debe tener ≤25 palabras.
 */
export interface ServiceCard {
  id: 'artesanias' | 'antiguedades' | 'restauracion';
  icon: LucideIcon;
  title: string;
  description: string;
  whatsappMessage: string;
}

/**
 * Producto del catálogo de artesanías o antigüedades.
 * `description` debe tener ≤20 palabras.
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'artesanias' | 'antiguedades';
}

/**
 * Testimonio de cliente.
 * `machine` es opcional y aplica principalmente a restauraciones.
 * `rating` es un entero de 1 a 5.
 */
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  machine?: string;
  serviceType: 'artesanias' | 'antiguedades' | 'restauracion';
  rating: number;
}
