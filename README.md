# Oscar Díaz — Portafolio UX/UI

Portafolio personal de Oscar Díaz (diseñador UX/UI), con una landing animada de
tema oscuro y páginas de case study detalladas.

## Stack

- **React 18** + **TypeScript**
- **React Router** para la navegación entre la home y los case studies
- **Vite** para dev/build
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones de scroll y reveal
- **Lucide React** para iconos

## Estructura

```
src/
├── App.tsx                 # rutas: / (home) y /trabajos/:slug (case study)
├── data/caseStudies.ts     # contenido de los 7 case studies (editable)
├── pages/
│   ├── Home.tsx
│   └── CaseStudyPage.tsx    # plantilla data-driven de case study
├── sections/               # Hero, Marquee, Trabajos, Acerca de mí, Servicios
└── components/             # Navbar, Footer, MoreProjects, ImagePlaceholder,
                            # FadeIn, Magnet, AnimatedText, botones
```

## Imágenes

Las imágenes se cargan mediante `ImagePlaceholder`: mientras un campo de imagen
esté vacío se muestra un placeholder con etiqueta. Para publicar imágenes reales
basta con rellenar los campos `heroImage`, `thumb` y `carousel` en
`src/data/caseStudies.ts` (y el retrato del hero) — el layout se completa solo.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # type-check + build de producción
npm run preview  # previsualizar el build
```

## Deploy

Es una SPA con rutas del lado del cliente. Se incluye `public/_redirects`
(Netlify) y `vercel.json` (Vercel) para el fallback a `index.html`. En otros
hosts estáticos, configura una regla equivalente que sirva `index.html` para
cualquier ruta.
