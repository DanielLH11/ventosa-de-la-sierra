# Ventosa de la Sierra - Web Municipal

Web oficial del municipio de Ventosa de la Sierra (Soria), construida con Next.js 16, React 19 y Tailwind CSS 4.

## 🚀 Características

- **Next.js 16 App Router**: Arquitectura moderna con rutas dinámicas
- **Tailwind CSS 4**: Diseño responsive y accesible
- **TypeScript**: Tipado fuerte para mayor seguridad
- **SEO optimizado**: Metadata y Open Graph configurados
- **Rendimiento**: Optimizado para Core Web Vitals
- **Accesibilidad**: Cumple estándares WCAG

## 📄 Páginas

- `/` - Inicio con hero y destacados
- `/historia` - Historia y patrimonio del municipio
- `/turismo` - Rutas, alojamientos y restaurantes con filtros
- `/agenda` - Agenda de eventos (con rutas dinámicas `/agenda/[slug]`)
- `/noticias` - Noticias (con rutas dinámicas `/noticias/[slug]`)
- `/galeria` - Galería de imágenes con filtros y lightbox
- `/como-llegar` - Mapa e indicaciones
- `/directorio` - Directorio de negocios con búsqueda

## 🛠️ Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm start

# Ejecutar linter
npm run lint
```

El servidor de desarrollo se inicia en [http://localhost:3000](http://localhost:3000).

## 📦 Estructura del proyecto

```
ventosa-de-la-sierra/
├── app/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── lib/             # Lógica y datos
│   │   ├── types.ts     # Tipos TypeScript
│   │   └── data.ts      # Datos mock
│   ├── agenda/          # Página de agenda
│   │   ├── page.tsx
│   │   └── [slug]/      # Ruta dinámica
│   ├── noticias/        # Página de noticias
│   │   ├── page.tsx
│   │   └── [slug]/      # Ruta dinámica
│   ├── turismo/         # Página de turismo
│   ├── directorio/      # Página de directorio
│   ├── galeria/         # Página de galería
│   ├── historia/        # Página de historia
│   ├── como-llegar/     # Página cómo llegar
│   ├── layout.tsx       # Layout raíz
│   ├── page.tsx         # Página de inicio
│   └── globals.css      # Estilos globales
├── public/              # Archivos estáticos
├── package.json
└── README.md
```

## 🎨 Personalización

### Colores

El tema principal usa verde esmeralda (`emerald`). Para cambiarlo, actualiza las clases de Tailwind en los componentes:
- `bg-emerald-600` → Color principal
- `text-emerald-700` → Texto principal
- `hover:bg-emerald-700` → Hover states

### Datos

Los datos están centralizados en `app/lib/data.ts`. Para actualizar:

1. **Eventos**: Modifica el array `eventos`
2. **Noticias**: Modifica el array `noticias`
3. **Rutas**: Modifica el array `rutas`
4. **Alojamientos**: Modifica el array `alojamientos`
5. **Restaurantes**: Modifica el array `restaurantes`
6. **Negocios**: Modifica el array `negocios`
7. **Galería**: Modifica el array `imagenesGaleria`

### Imágenes

Los placeholders de imágenes están como gradientes CSS. Para usar imágenes reales:

1. Coloca las imágenes en `public/images/`
2. Actualiza las referencias en los componentes
3. Usa el componente `next/image` para optimización automática

Ejemplo:
```tsx
<Image
  src="/images/iglesia.jpg"
  alt="Iglesia de San Miguel"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🚢 Despliegue en Vercel

1. Push del código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el build
4. ¡Listo! Tu sitio está en producción

### Variables de entorno (opcional)

Si necesitas APIs externas, crea un archivo `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_clave_aquí
NEXT_PUBLIC_CONTACT_EMAIL=info@ventosadelasierra.es
```

## 📱 Responsive

El diseño es completamente responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Contraste de colores WCAG AA
- Focus states visibles
- Semántica HTML correcta

## 📄 Licencia

Este proyecto es propiedad del Ayuntamiento de Ventosa de la Sierra.

## 📞 Contacto

Para más información:
- **Email**: info@ventosadelasierra.es
- **Teléfono**: 975 123 456
- **Dirección**: Plaza Mayor, 1 - 42149 Ventosa de la Sierra, Soria

---

Desarrollado con ❤️ para Ventosa de la Sierra
