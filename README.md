# Colección Patrimonial &amp; Archivo Histórico de Chile

Catálogo, archivo y exposición digital de un fondo histórico chileno destinado a donación museográfica: libros antiguos ilustrados, obras de arte de grandes maestros, manuscritos republicanos, jarrones y cerámica colonial, y tecnología de época (máquinas de escribir).

Plataforma web tipo museo con atmósfera curatorial, vitrina interactiva con lupa, línea de tiempo histórica, catálogo de piezas con estado de conservación y protocolo formal de donación a instituciones chilenas.

## 🖥️ Stack tecnológico

- **React 18** + **TypeScript** + **Vite 6** (build)
- **Tailwind CSS 4** (estilos utilitarios)
- **Radix UI** (primitivas accesibles: acordeón, diálogos, tabs, tooltips, etc.)
- **Motion** (animaciones y microinteracciones)
- **lucide-react** (iconografía)
- **Vitest** + **Testing Library** (tests)

## 📂 Estructura del proyecto

```
src/
  main.tsx                 # Punto de entrada
  app/
    App.tsx                # Composición de la página
    components/
      sections/            # Secciones del museo (Hero, Vitrina 3D, Catálogo,
                           #   Línea temporal, Filosofía curatorial, Donación,
                           #   Contacto institucional, Footer)
      effects/             # Efectos visuales (grano, partículas, tilt, etc.)
      ui/                  # Componentes de UI (Radix + shadcn)
      figma/               # Imágenes con fallback
    data/
      archiveData.ts       # Catálogo de piezas patrimoniales
    types/
    utils/
```

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Tests
npm test
```

## ☁️ Deploy (Vercel)

El proyecto está listo para desplegarse en Vercel. La configuración ya está incluida:

- `vercel.json` — framework Vite, `npm run build` como build command y `dist` como directorio de salida, con rewrites SPA.
- El proyecto está vinculado a Vercel en la carpeta `.vercel/` (no versionada).

### Opción A — Importar desde Git (recomendado)

1. Ve a [vercel.com/new](https://vercel.com/new) e importa el repo `ExeDevCentral/Legado-Memoria`.
2. Vercel detectará automáticamente Vite (build: `npm run build`, output: `dist`).
3. Click en **Deploy**.

### Opción B — CLI

```bash
# Verificar estado de autenticación
vercel whoami

# Deploy de producción (si el proyecto ya está vinculado)
vercel --prod
```

### Configuración confirmada

| Campo | Valor |
|-------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Runtime | Node.js |

## 📋 Checklist previo al deploy

- [x] Build de producción correcto (`npm run build`)
- [x] `vercel.json` con rewrites SPA para rutas
- [x] `.vercel` en `.gitignore` (no se comparte)
- [x] Metadatos SEO en `index.html` (título y descripción)
- [x] Fuentes (Cinzel, Cormorant Garamond, Libre Baskerville) vía Google Fonts

## 📄 Licencia

Uso privado / institucional. Proyecto de difusión patrimonial sin fines de lucro.
