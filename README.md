# Documentación del Proyecto: Las Plantitas de Elina

## 📌 Descripción General
**Las Plantitas de Elina** es un sitio web moderno y responsive para un vivero especializado en plantas de interior, exterior y suculentas. El proyecto utiliza React.js con Vite como bundler, y está diseñado con un enfoque en la experiencia del usuario y la estética natural.

## 🛠 Tecnologías Utilizadas
- **Frontend**: React 18, React Router 6
- **Estilos**: SCSS (Mobile First)
- **Iconos**: React Icons (Bs, Fa)
- **Sliders**: react-slick
- **Animaciones**: Framer Motion
- **Bundler**: Vite

## 🗂 Estructura del Proyecto
```
src/
├── componentes/
│   ├── Contacto.jsx           # Página de contacto
│   ├── Cuidados.jsx           # Guía de cuidados de plantas
│   ├── Footer.jsx             # Pie de página principal
│   ├── FooterGondraWorldDev.jsx # Créditos del desarrollador
│   ├── GaleriaPlantas.jsx     # Slider principal
│   ├── Header.jsx             # Cabecera responsive
│   ├── Inicio.jsx             # Página de inicio
│   ├── PlantasInterior.jsx    # Catálogo de plantas de interior
│   ├── SobreNosotros.jsx      # Información del vivero
│   ├── WhatsappButton.jsx     # Botón flotante de WhatsApp
├── App.jsx                    # Configuración de rutas
├── main.jsx                   # Punto de entrada
```

## 🎨 Componentes Principales

### 1. Header.jsx
- Barra de navegación responsive con menú desplegable
- Logo del vivero
- Efectos de scroll
- Iconos descriptivos para cada sección

### 2. GaleriaPlantas.jsx
- Slider principal con autoplay
- Flechas de navegación personalizadas
- Efectos de zoom suave
- Diseño responsive con breakpoints

### 3. Inicio.jsx
- Sección de bienvenida
- Destacados del vivero
- Llamados a acción

### 4. PlantasInterior.jsx
- Catálogo de plantas de interior
- Filtros por categorías
- Cards con información de cada planta

### 5. SobreNosotros.jsx
- Historia del vivero
- Equipo de trabajo
- Galería de instalaciones
- Sección de filosofía

### 6. Cuidados.jsx
- Guías completas de cuidado
- Tips por tipo de planta
- Calendario de riego

### 7. Contacto.jsx
- Formulario de contacto
- Mapa de ubicación
- Horarios de atención

### 8. Footer.jsx
- Información de contacto
- Enlaces a redes sociales
- Logo del vivero
- Diseño con elementos naturales

## 🌿 Estilo y Diseño
- **Paleta de colores**: Verdes naturales (#2e7d32, #1b5e20, #e8f5e9)
- **Tipografías**:
  - Principal: Raleway
  - Títulos: Playfair Display
- **Efectos**:
  - Animaciones suaves con Framer Motion
  - Transiciones hover cuidadosamente diseñadas
  - Efectos de scroll

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/las-plantitas-de-elina.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

## 📊 SEO Optimizado
- Meta tags personalizados
- Descripciones para cada página
- Imágenes optimizadas
- Estructura semántica HTML5

## 📱 Responsive Design
- Diseño Mobile First
- Breakpoints cuidadosamente planificados:
  - Móvil: < 768px
  - Tablet: 768px - 1024px
  - Escritorio: > 1024px

## 🌟 Características Especiales
- Botón flotante de WhatsApp
- Efectos visuales con temática natural
- Galerías interactivas
- Formularios accesibles
- Performance optimizada
