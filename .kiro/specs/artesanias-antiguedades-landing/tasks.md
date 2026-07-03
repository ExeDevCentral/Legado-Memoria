# Implementation Plan: Artesanías, Antigüedades & Restauración — Landing Page

## Overview

Expandir la landing page existente de restauración de máquinas de escribir hacia una landing unificada de tres pilares (artesanías, antigüedades y restauración). Se reutilizan los componentes existentes, se añaden los nuevos componentes definidos en el diseño, y todo el contacto se canaliza exclusivamente a través de WhatsApp. El stack es React 18 + TypeScript + Tailwind CSS v4 + shadcn/ui + motion/react.

---

## Tasks

- [ ] 1. Configurar utilidades base y tipos compartidos
  - [-] 1.1 Crear `src/app/utils/whatsapp.ts` con la función `buildWhatsAppUrl`
    - Implementar `buildWhatsAppUrl(phone: string, message: string): string` que encodee el mensaje y use fallback si está vacío
    - Exportar la función para uso en todos los componentes CTA
    - _Requirements: 2.4, 3.3, 4.3, 5.5, 8.4, 9.2_
  - [ ]* 1.2 Escribir pruebas de propiedad para `buildWhatsAppUrl` en `src/app/utils/whatsapp.test.ts`
    - **Property 1: Todos los CTAs de WhatsApp del Hero generan URLs válidas** — genera mensajes arbitrarios, verifica prefijo `https://wa.me/56954095465?text=` y mensaje codificado no vacío
    - **Property 3: El CTA de WhatsApp de cada tarjeta de servicio menciona su categoría** — genera categorías y verifica presencia en URL codificada
    - **Property 5: El CTA de WhatsApp de cada producto incluye el nombre del producto** — genera nombres arbitrarios, verifica presencia en href codificado
    - **Property 6: Después del diagnóstico, el CTA indica diagnóstico completado** — genera arrays de File simulados, verifica mensaje de presupuesto en URL
    - **Validates: Requirements 2.4, 3.3, 4.3, 5.5**
  - [-] 1.3 Crear `src/app/config/business.ts` con `BUSINESS_CONFIG`
    - Definir constante con `name`, `phone`, `email`, `address` del negocio
    - _Requirements: 8.1, 8.2, 8.5, 11.2, 11.3_
  - [-] 1.4 Crear `src/app/types/index.ts` con todas las interfaces compartidas
    - Definir `NavLink`, `ServiceCard`, `Product`, `Testimonial` (extendida con `rating` y `serviceType`)
    - _Requirements: 3.1, 4.1, 7.1_

- [ ] 2. Implementar componente `Navbar`
  - [~] 2.1 Crear `src/app/components/navbar.tsx`
    - Implementar estado local `isScrolled` con listener de `scroll` en `useEffect` (activa al superar 80 px)
    - Implementar estado local `isMenuOpen` con botón hamburguesa para mobile
    - Renderizar logo/nombre del negocio a la izquierda y links a la derecha en desktop
    - Implementar `scrollToSection(id)` con guarda `if (el)` para cada link
    - Detectar click fuera del menú con `mousedown` + `useRef` para cerrar menú hamburguesa
    - Aplicar `Tema_Vintage` con fondo opaco cuando `isScrolled === true`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  - [ ]* 2.2 Escribir pruebas de ejemplo para `Navbar` en `src/app/components/navbar.test.tsx`
    - Verificar renderizado de links, comportamiento sticky y toggle del menú hamburguesa
    - _Requirements: 1.1, 1.3, 1.4, 1.5_

- [ ] 3. Implementar `SectionHero`
  - [~] 3.1 Crear `src/app/components/section-hero.tsx`
    - Mostrar título con los tres pilares (artesanías, antigüedades, restauración de máquinas de escribir)
    - Incluir descripción de ≤40 palabras con propuesta de valor
    - Incluir dos CTAs de WhatsApp (productos y restauración) usando `buildWhatsAppUrl`
    - Reutilizar fondo con overlay, elementos decorativos y animaciones `motion/react` existentes en `App.tsx`
    - Incluir stats (2,400+ restauraciones, 37 años, 98% satisfacción) con animación de entrada
    - Incluir scroll indicator animado
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 4. Implementar `SectionServices`
  - [~] 4.1 Crear `src/app/components/section-services.tsx`
    - Definir array de 3 `ServiceCard` (artesanías, antigüedades, restauración) con ícono, título, descripción ≤25 palabras y mensaje WhatsApp específico
    - Renderizar grid con clases Tailwind: 3 cols en `lg`, 2 en `sm`, 1 en mobile
    - Usar `buildWhatsAppUrl` con mensaje que mencione la categoría de cada tarjeta
    - Aplicar `Tema_Vintage` en colores, bordes y tipografía
    - Añadir animaciones `whileInView` con `once: true`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  - [ ]* 4.2 Escribir prueba de propiedad para `ServiceCard` en `src/app/components/service-card.test.tsx`
    - **Property 2: Cada tarjeta de servicio tiene todos los campos requeridos y descripción corta** — itera sobre el array de 3 servicios, verifica ícono, título no vacío, descripción ≤25 palabras y href válido
    - **Validates: Requirements 3.2**

- [ ] 5. Implementar `SectionCatalog` y `ProductCard`
  - [~] 5.1 Crear `src/app/data/catalog.ts` con datos estáticos de productos
    - Definir al menos 3 productos de artesanías y 3 de antigüedades con `id`, `name`, `description` (≤20 palabras), `imageUrl` y `category`
    - _Requirements: 4.1, 4.2_
  - [~] 5.2 Crear `src/app/components/product-card.tsx`
    - Mostrar imagen usando `ImageWithFallback` (con placeholder vintage si falla la carga)
    - Mostrar nombre, descripción ≤20 palabras y botón "Consultar por WhatsApp"
    - El botón usa `buildWhatsAppUrl` con mensaje que incluye el nombre exacto del producto
    - Aplicar `Tema_Vintage`
    - _Requirements: 4.2, 4.3, 4.5_
  - [ ]* 5.3 Escribir prueba de propiedad para `ProductCard` en `src/app/components/product-card.test.tsx`
    - **Property 4: Cada tarjeta de producto tiene todos los campos requeridos y descripción corta** — genera `Product` con `fc.record(...)`, verifica imagen/placeholder, nombre, descripción ≤20 palabras y botón WhatsApp
    - **Property 5: El CTA de WhatsApp de cada producto incluye el nombre del producto** — genera nombre de producto arbitrario, verifica presencia en href codificado
    - **Validates: Requirements 4.2, 4.3**
  - [~] 5.4 Crear `src/app/components/section-catalog.tsx`
    - Organizar productos en dos subsecciones separadas ("Artesanías" y "Antigüedades")
    - Renderizar grilla responsiva 3/2/1 columnas con `ProductCard`
    - Mostrar aviso "Precios y disponibilidad por WhatsApp" en cada subsección
    - Añadir animaciones `whileInView` con `once: true`
    - _Requirements: 4.1, 4.4, 4.6_

- [ ] 6. Implementar `SectionRestauracion`
  - [~] 6.1 Crear `src/app/components/section-restauracion.tsx`
    - Recibir props `uploadedImages`, `showDiagnosis`, `onImagesSelected` desde `App`
    - Mostrar pasos del proceso (diagnóstico, limpieza, restauración mecánica, garantía) — extraer de `App.tsx` la sección "Features Section" existente
    - Incluir `ImageUpload`, `DiagnosisSection` y `BrandsSection` existentes
    - Cuando `showDiagnosis === true`, mostrar CTA de WhatsApp usando `buildWhatsAppUrl` con mensaje que indique diagnóstico completado y solicitud de presupuesto
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [~] 7. Checkpoint — Verificar componentes base
  - Asegurarse de que `Navbar`, `SectionHero`, `SectionServices`, `SectionCatalog` y `SectionRestauracion` compilan sin errores TypeScript.
  - Ejecutar `pnpm run build` y confirmar que el build pasa. Preguntar al usuario si hay dudas.

- [ ] 8. Conectar secciones en `App.tsx` y verificar scroll
  - [~] 8.1 Refactorizar `src/app/App.tsx`
    - Importar y montar `Navbar`, `SectionHero`, `SectionServices`, `SectionCatalog`, `SectionRestauracion`
    - Asignar `id` a cada sección (`artesanias`, `antiguedades`, `restauracion`, `galeria`, `contacto`) para que los links de `Navbar` funcionen
    - Pasar `uploadedImages`, `showDiagnosis` y `onImagesSelected` a `SectionRestauracion`
    - Mantener las secciones `SectionGallery` (Gallery), `SectionTestimonials` (Testimonials), `SectionContact` (LocationSection) ya existentes con sus ids correctos
    - _Requirements: 1.2, 2.1, 5.1, 5.2_

- [ ] 9. Implementar `Footer` como componente independiente
  - [~] 9.1 Crear `src/app/components/footer.tsx`
    - Mostrar las tres categorías del negocio con enlaces a sus secciones
    - Mostrar contacto completo: dirección, WhatsApp y correo como enlace `mailto:`
    - Mostrar texto de copyright con nombre del negocio
    - Aplicar `Tema_Vintage` con fondo `--vintage-dark` y texto en crema/dorado
    - Reemplazar el bloque inline de footer en `App.tsx` por este componente
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [ ] 10. Extender `Testimonials` con campos de rating y tipo de servicio
  - [~] 10.1 Modificar `src/app/components/testimonials.tsx`
    - Añadir `rating: number` (1–5) y `serviceType: 'artesanias' | 'antiguedades' | 'restauracion'` a la interfaz `Testimonial`
    - Renderizar la calificación en estrellas (representación visual) en cada tarjeta
    - Renderizar el tipo de servicio en cada tarjeta
    - Actualizar los datos de testimonios para incluir al menos uno por cada tipo de servicio
    - Mantener las animaciones `whileInView` con `once: true`
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  - [ ]* 10.2 Escribir prueba de propiedad para `Testimonials` en `src/app/components/testimonials.test.tsx`
    - **Property 8: Cada tarjeta de testimonio muestra todos los campos requeridos** — genera `Testimonial` con `fc.record(...)`, verifica nombre, estrellas (visual 1–5), texto de reseña y tipo de servicio en el render
    - **Validates: Requirements 7.1**

- [ ] 11. Verificar y ajustar comportamiento de `Gallery`
  - [~] 11.1 Revisar `src/app/components/gallery.tsx`
    - Confirmar que cada `GalleryItem` expone `model`, `year` y `description` en el panel de información cuando es el ítem activo
    - Confirmar navegación anterior/siguiente y dots de paginación
    - Confirmar que al cambiar de ítem ninguna imagen queda seleccionada hasta que el usuario haga clic en "Ver Antes" o "Ver Después"
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_
  - [ ]* 11.2 Escribir prueba de propiedad para `Gallery` en `src/app/components/gallery.test.tsx`
    - **Property 7: Cada elemento de la galería muestra modelo, año y descripción** — genera `GalleryItem[]` con `fc.array(fc.record({model: fc.string(), year: fc.integer(), description: fc.string(), ...}))`, verifica que el ítem activo muestra sus tres campos
    - **Validates: Requirements 6.3**

- [ ] 12. Instalar fast-check y configurar Vitest
  - [-] 12.1 Instalar dependencias de prueba
    - Ejecutar `pnpm add -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom fast-check`
    - Añadir configuración de Vitest en `vite.config.ts` o `vitest.config.ts` con entorno `jsdom`
    - Añadir script `"test": "vitest run"` en `package.json`
    - _Requirements: (infraestructura de testing para todas las properties)_

- [~] 13. Checkpoint final — Verificar consistencia visual y funcional
  - Ejecutar `pnpm run build` para confirmar compilación sin errores TypeScript.
  - Revisar que todas las secciones tienen `id` correcto para los links de `Navbar`.
  - Verificar que `WhatsAppButton` global sigue visible en todas las secciones.
  - Preguntar al usuario si hay dudas o ajustes antes de cerrar.

---

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea hace referencia a los requisitos específicos para trazabilidad.
- Los componentes existentes (`Gallery`, `ImageUpload`, `DiagnosisSection`, `LocationSection`, `BrandsSection`, `WhatsAppButton`, `ImageWithFallback`) se reutilizan sin modificación salvo `Testimonials`.
- La función `buildWhatsAppUrl` es el núcleo de todos los CTAs — debe implementarse primero (Tarea 1.1) antes que cualquier CTA.
- El número de WhatsApp configurado es `56954095465` (sin `+` ni espacios).
- Todas las animaciones de entrada deben usar `whileInView` + `viewport={{ once: true }}` de `motion/react`.
- Los datos del catálogo son contenido estático — no hay backend ni API.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.3", "1.4", "12.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "2.1", "3.1", "5.1"] },
    { "id": 2, "tasks": ["2.2", "4.1", "5.2", "6.1", "9.1", "10.1"] },
    { "id": 3, "tasks": ["4.2", "5.3", "5.4", "8.1", "11.1"] },
    { "id": 4, "tasks": ["10.2", "11.2"] }
  ]
}
```
