# Requirements Document

## Introduction

Esta especificación describe la expansión de la landing page existente de "Restauración de Máquinas de Escribir" para convertirse en una landing page unificada que presente los tres servicios/productos del negocio: venta de artesanías, venta de antigüedades y reparación de máquinas de escribir. Todo el contacto y la venta se gestionan exclusivamente a través de WhatsApp; no existe carrito de compras ni pagos en línea. La landing page debe mantener la estética vintage ya establecida (React + TypeScript + Tailwind CSS + shadcn/ui) y ampliar la identidad visual para abarcar los tres pilares del negocio.

### Glosario

- **Landing_Page**: La página web única que presenta todos los servicios y productos del negocio.
- **Visitante**: Cualquier usuario que acceda a la Landing_Page a través de un navegador web.
- **WhatsApp_CTA**: Botón o enlace que abre una conversación de WhatsApp con un mensaje predefinido.
- **Seccion_Hero**: Sección principal visible al cargar la página, con titular, descripción y llamada a la acción.
- **Seccion_Servicios**: Sección que muestra los tres pilares del negocio (artesanías, antigüedades, reparación).
- **Seccion_Catalogo**: Sección que muestra una selección visual de productos disponibles (artesanías y antigüedades).
- **Seccion_Restauracion**: Sección específica para el servicio de reparación de máquinas de escribir.
- **Seccion_Galeria**: Sección de galería antes/después de restauraciones realizadas.
- **Seccion_Testimonios**: Sección con reseñas de clientes satisfechos.
- **Seccion_Contacto**: Sección con información de contacto, ubicación y horario.
- **Tarjeta_Producto**: Componente visual que muestra imagen, nombre, descripción breve y botón de contacto por WhatsApp de un producto.
- **Boton_Flotante_WhatsApp**: Botón fijo en pantalla que permite contacto rápido por WhatsApp en cualquier momento.
- **Navegacion**: Barra de navegación que permite al Visitante desplazarse entre secciones.
- **Numero_WhatsApp**: Número de teléfono configurado para recibir mensajes de WhatsApp (actualmente +56 9 5409 5465).
- **Mensaje_Predefinido**: Texto de WhatsApp generado automáticamente según el contexto de la interacción.
- **Tema_Vintage**: Paleta de colores, tipografía y estilo visual heredado del proyecto existente (vintage-paper, vintage-cream, vintage-dark, vintage-gold, vintage-bronze, vintage-sepia, vintage-metal).

## Requirements

### Requirement 1: Navegación principal multi-sección

**User Story:** Como Visitante, quiero una barra de navegación clara que me permita acceder a cada sección de la página, para orientarme fácilmente y encontrar lo que busco.

#### Criterios de Aceptación

1. THE Navegacion SHALL mostrar el nombre del negocio o logo en el lado izquierdo y los enlaces a secciones (Artesanías, Antigüedades, Restauración, Galería, Contacto) en el lado derecho.
2. WHEN el Visitante hace clic en un enlace de la Navegacion, THE Landing_Page SHALL desplazarse suavemente hasta la sección correspondiente mediante scroll animado.
3. WHILE el Visitante hace scroll hacia abajo más de 80px, THE Navegacion SHALL permanecer fija en la parte superior de la pantalla con fondo opaco del Tema_Vintage.
4. WHEN el Visitante accede desde un dispositivo con ancho de pantalla menor a 768px, THE Navegacion SHALL mostrar un menú hamburguesa que al activarse despliega los enlaces de navegación.
5. IF el menú hamburguesa está abierto y el Visitante hace clic fuera de él, THEN THE Navegacion SHALL cerrar el menú desplegable.

---

### Requirement 2: Sección Hero unificada

**User Story:** Como Visitante, quiero ver una presentación impactante del negocio al cargar la página, para entender de inmediato qué ofrece la tienda y cómo contactarla.

#### Criterios de Aceptación

1. THE Seccion_Hero SHALL mostrar un título principal que incluya los tres pilares del negocio: artesanías, antigüedades y restauración de máquinas de escribir.
2. THE Seccion_Hero SHALL mostrar una descripción de no más de 40 palabras que comunique la propuesta de valor del negocio.
3. THE Seccion_Hero SHALL incluir al menos dos WhatsApp_CTA visibles: uno para consultar sobre productos y otro para solicitar restauración.
4. WHEN el Visitante hace clic en cualquier WhatsApp_CTA de la Seccion_Hero, THE Landing_Page SHALL abrir WhatsApp con el Numero_WhatsApp y un Mensaje_Predefinido genérico de contacto.
5. THE Seccion_Hero SHALL aplicar el Tema_Vintage con imagen de fondo y animaciones de entrada coherentes con el estilo existente.

---

### Requirement 3: Sección de servicios destacados

**User Story:** Como Visitante, quiero ver los tres servicios del negocio presentados de manera clara y diferenciada, para entender rápidamente qué puedo encontrar en cada categoría.

#### Criterios de Aceptación

1. THE Seccion_Servicios SHALL mostrar exactamente tres tarjetas: "Artesanías", "Antigüedades" y "Restauración de Máquinas de Escribir".
2. EACH tarjeta de la Seccion_Servicios SHALL incluir un ícono representativo, un título, una descripción de no más de 25 palabras y un WhatsApp_CTA específico para esa categoría.
3. WHEN el Visitante hace clic en el WhatsApp_CTA de una tarjeta de la Seccion_Servicios, THE Landing_Page SHALL abrir WhatsApp con el Numero_WhatsApp y un Mensaje_Predefinido que mencione la categoría seleccionada.
4. THE Seccion_Servicios SHALL presentar las tarjetas en una grilla de tres columnas en pantallas de ancho mayor o igual a 1024px, dos columnas en pantallas de ancho entre 640px y 1023px, y una columna en pantallas de ancho menor a 640px.
5. THE Seccion_Servicios SHALL aplicar el Tema_Vintage en colores, bordes y tipografía de las tarjetas.

---

### Requirement 4: Catálogo de productos (artesanías y antigüedades)

**User Story:** Como Visitante, quiero explorar una selección visual de los productos disponibles, para evaluar si algo me interesa y contactar al vendedor fácilmente.

#### Criterios de Aceptación

1. THE Seccion_Catalogo SHALL mostrar productos organizados en dos sub-secciones separadas: "Artesanías" y "Antigüedades".
2. EACH Tarjeta_Producto SHALL mostrar una imagen del producto, su nombre, una descripción breve de no más de 20 palabras, y un botón "Consultar por WhatsApp".
3. WHEN el Visitante hace clic en el botón "Consultar por WhatsApp" de una Tarjeta_Producto, THE Landing_Page SHALL abrir WhatsApp con el Numero_WhatsApp y un Mensaje_Predefinido que incluya el nombre del producto consultado.
4. THE Seccion_Catalogo SHALL mostrar las Tarjeta_Producto en una grilla responsiva de máximo 3 columnas en escritorio, 2 en tablet y 1 en móvil.
5. IF la imagen de un producto no está disponible o falla al cargar, THEN THE Tarjeta_Producto SHALL mostrar un placeholder visual acorde al Tema_Vintage.
6. THE Seccion_Catalogo SHALL indicar visualmente que todos los precios y disponibilidad se consultan por WhatsApp, sin mostrar precios fijos.

---

### Requirement 5: Sección de restauración de máquinas de escribir

**User Story:** Como Visitante interesado en restauración, quiero encontrar información clara sobre el servicio, para saber cómo funciona el proceso y cómo solicitar un diagnóstico.

#### Criterios de Aceptación

1. THE Seccion_Restauracion SHALL mantener el componente de carga de imágenes existente (ImageUpload) para el diagnóstico preliminar gratuito.
2. THE Seccion_Restauracion SHALL mantener el componente de diagnóstico existente (DiagnosisSection) que se activa al cargar imágenes.
3. THE Seccion_Restauracion SHALL mostrar los pasos del proceso de restauración (diagnóstico, limpieza, restauración mecánica, garantía) coherentes con el diseño actual.
4. THE Seccion_Restauracion SHALL mostrar las marcas de máquinas de escribir atendidas (Olivetti, Remington, Underwood, Olympia, Hermes, Brother y otras).
5. WHEN el Visitante sube imágenes en la Seccion_Restauracion y completa el diagnóstico, THE Landing_Page SHALL mostrar un botón de WhatsApp_CTA con Mensaje_Predefinido que indique que el usuario ya realizó el diagnóstico y desea solicitar presupuesto.

---

### Requirement 6: Galería de trabajos realizados

**User Story:** Como Visitante, quiero ver ejemplos reales de trabajos anteriores, para evaluar la calidad del trabajo antes de contactar al taller.

#### Criterios de Aceptación

1. THE Seccion_Galeria SHALL mostrar el componente de galería antes/después existente para restauraciones de máquinas de escribir.
2. THE Seccion_Galeria SHALL permitir la navegación entre elementos mediante controles anterior/siguiente.
3. THE Seccion_Galeria SHALL mostrar la información del trabajo: modelo, año y descripción de la restauración realizada.
4. THE Seccion_Galeria SHALL mostrar indicadores de paginación (dots) que reflejen el índice actual de la galería.
5. WHEN el Visitante hace clic en "Ver Antes" o "Ver Después", THE Seccion_Galeria SHALL mostrar la imagen correspondiente con una transición animada de opacidad.
6. WHEN el Visitante navega entre elementos de la Seccion_Galeria mediante los controles anterior/siguiente, THE Seccion_Galeria SHALL mantener el estado sin imagen visible hasta que el Visitante seleccione explícitamente "Ver Antes" o "Ver Después".

---

### Requirement 7: Testimonios de clientes

**User Story:** Como Visitante, quiero leer opiniones de otros clientes, para ganar confianza en la calidad del servicio antes de contactar.

#### Criterios de Aceptación

1. THE Seccion_Testimonios SHALL mostrar reseñas de clientes con nombre, calificación en estrellas (1 a 5), texto de la reseña y servicio utilizado (artesanía, antigüedad o restauración).
2. THE Seccion_Testimonios SHALL aplicar el Tema_Vintage en tipografía, colores y presentación visual.
3. WHEN la Seccion_Testimonios entra en el viewport del Visitante, THE Seccion_Testimonios SHALL animar la aparición de las tarjetas de testimonio con efectos de entrada coherentes con el estilo existente.
4. THE Seccion_Testimonios SHALL mostrar al menos tres testimonios representativos de los distintos servicios ofrecidos.

---

### Requirement 8: Información de contacto y ubicación

**User Story:** Como Visitante, quiero encontrar fácilmente la dirección, horarios y medios de contacto, para planificar una visita o enviar un mensaje.

#### Criterios de Aceptación

1. THE Seccion_Contacto SHALL mostrar la dirección física del taller (Locales Artesanales junto al GAM, Av. Libertador Bernardo O'Higgins 227, Santiago Centro).
2. THE Seccion_Contacto SHALL mostrar el horario de atención (Lunes a Viernes 10:00–19:00, Sábados 10:00–14:00, Domingos cerrado).
3. THE Seccion_Contacto SHALL mostrar el mapa interactivo de Google Maps embebido con la ubicación del taller.
4. THE Seccion_Contacto SHALL mostrar un WhatsApp_CTA con Mensaje_Predefinido de solicitud de visita al taller.
5. THE Seccion_Contacto SHALL mostrar el correo electrónico del negocio como enlace mailto funcional.

---

### Requirement 9: Botón flotante de WhatsApp

**User Story:** Como Visitante, quiero tener acceso rápido a WhatsApp desde cualquier punto de la página, para contactar al negocio sin necesidad de buscar el botón de contacto.

#### Criterios de Aceptación

1. THE Boton_Flotante_WhatsApp SHALL permanecer visible en la esquina inferior derecha en todas las secciones de la Landing_Page.
2. WHEN el Visitante hace clic en el Boton_Flotante_WhatsApp, THE Landing_Page SHALL abrir WhatsApp con el Numero_WhatsApp y un Mensaje_Predefinido genérico de saludo y consulta.
3. THE Boton_Flotante_WhatsApp SHALL mostrar una animación de pulso continua para atraer la atención del Visitante.
4. WHEN el Visitante coloca el cursor sobre el Boton_Flotante_WhatsApp, THE Boton_Flotante_WhatsApp SHALL mostrar un tooltip con el texto "¿Necesitas ayuda? Escríbenos".
5. THE Boton_Flotante_WhatsApp SHALL aplicar el estilo visual existente (color verde, ícono de mensaje, animación de escala al pasar el cursor).

---

### Requirement 10: Adaptabilidad y consistencia visual

**User Story:** Como Visitante desde cualquier dispositivo, quiero que la página se vea bien y cargue correctamente, para tener una experiencia de uso fluida.

#### Criterios de Aceptación

1. THE Landing_Page SHALL ser completamente funcional y visualmente coherente en pantallas con ancho mínimo de 320px.
2. THE Landing_Page SHALL aplicar el Tema_Vintage de manera consistente en todas las secciones, reutilizando las variables CSS existentes (--vintage-paper, --vintage-cream, --vintage-dark, --vintage-gold, --vintage-bronze, --vintage-sepia, --vintage-metal).
3. IF una imagen externa no puede cargarse, THEN THE Landing_Page SHALL mostrar un elemento placeholder visual sin romper el layout de la página.
4. THE Landing_Page SHALL utilizar animaciones de entrada con `motion/react` coherentes con las existentes en el proyecto, aplicando `whileInView` con `once: true` para las secciones no críticas.
5. THE Landing_Page SHALL utilizar la tipografía existente del proyecto (font-typewriter para títulos y elementos decorativos) de manera coherente en todas las secciones.

---

### Requirement 11: Footer unificado

**User Story:** Como Visitante, quiero ver un pie de página con información completa del negocio, para acceder a datos de contacto, categorías y créditos de manera rápida.

#### Criterios de Aceptación

1. THE Landing_Page SHALL mostrar un footer con las tres categorías del negocio (artesanías, antigüedades, restauración) listadas con enlaces a sus secciones correspondientes.
2. THE Landing_Page SHALL mostrar en el footer la información de contacto completa: dirección, WhatsApp y correo electrónico; esta información SHALL estar disponible también en la Seccion_Contacto de manera independiente.
3. THE Landing_Page SHALL mostrar en el footer un texto de copyright con el nombre del negocio.
4. THE Landing_Page SHALL aplicar el Tema_Vintage en el footer con fondo oscuro (--vintage-dark) y texto en tonos crema y dorado, coherente con el diseño existente.
