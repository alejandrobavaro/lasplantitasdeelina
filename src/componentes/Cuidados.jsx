// Importaciones de librerías y componentes
import React, { useState } from "react"; // Importa React y el hook useState
import { motion } from "framer-motion"; // Para animaciones
import { 
  BsArrowLeft, 
  BsArrowRight, 
  BsDroplet, 
  BsSun, 
  BsFlower1,
  BsCheckCircle 
} from "react-icons/bs"; // Iconos de Bootstrap
import { GiPlantWatering, GiPlantSeed } from "react-icons/gi"; // Iconos de plantas
import Slider from "react-slick"; // Componente de carrusel
import "../assets/scss/_03-Componentes/_Cuidados.scss"; // Estilos SCSS

// Componente Flecha Anterior personalizada para el slider
const CustomPrevArrow = (props) => {
  const { onClick } = props; // Extrae la función onClick de las props
  return (
    <div 
      className="slick-arrow slick-prev" // Clases para estilizado
      onClick={onClick} // Maneja el click
      aria-label="Slide anterior" // Accesibilidad
    >
      <BsArrowLeft /> {/* Icono de flecha izquierda */}
    </div>
  );
};

// Componente Flecha Siguiente personalizada para el slider
const CustomNextArrow = (props) => {
  const { onClick } = props; // Extrae la función onClick de las props
  return (
    <div 
      className="slick-arrow slick-next" // Clases para estilizado
      onClick={onClick} // Maneja el click
      aria-label="Slide siguiente" // Accesibilidad
    >
      <BsArrowRight /> {/* Icono de flecha derecha */}
    </div>
  );
};

// Componente principal Cuidados
const Cuidados = () => {
  // Estado para la categoría activa en los filtros
  const [activeCategory, setActiveCategory] = useState('todos');

  // Array de categorías disponibles para filtrar
  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'suculentas', nombre: 'Suculentas' },
    { id: 'interior', nombre: 'Interior' },
    { id: 'exterior', nombre: 'Exterior' },
    { id: 'aromáticas', nombre: 'Aromáticas' }
  ];

  // Datos de las guías de cuidado
  const guiasCuidados = [
    {
      id: 1,
      categoria: 'suculentas',
      titulo: "Cuidado de Suculentas",
      dificultad: "Fácil",
      descripcion: "Aprende los secretos para mantener tus suculentas saludables y evitar el exceso de agua que puede dañarlas.",
      imagenes: [
        "/img/cuidados/suculentas-1.jpg",
        "/img/cuidados/suculentas-2.jpg",
        "/img/cuidados/suculentas-3.jpg"
      ],
      consejos: [
        "Riego cada 10-15 días en verano",
        "Luz solar indirecta pero abundante",
        "Sustrato con buen drenaje"
      ]
    },
    // ... (otros objetos de guías con la misma estructura)
  ];

  // Filtra las guías según la categoría seleccionada
  const guiasFiltradas = activeCategory === 'todos' 
    ? guiasCuidados 
    : guiasCuidados.filter(guia => guia.categoria === activeCategory);

  // Configuración del carrusel/slider
  const sliderSettings = {
    dots: true, // Muestra indicadores de puntos
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición (ms)
    slidesToShow: 1, // Slides visibles a la vez
    slidesToScroll: 1, // Slides a desplazar
    autoplay: false, // Autoplay desactivado
    arrows: true, // Muestra flechas de navegación
    nextArrow: <CustomNextArrow />, // Componente flecha siguiente
    prevArrow: <CustomPrevArrow /> // Componente flecha anterior
  };

  // Devuelve el icono correspondiente a cada categoría
  const getIconForCategory = (category) => {
    switch(category) {
      case 'suculentas': return <BsDroplet />; // Icono gota para suculentas
      case 'interior': return <BsFlower1 />; // Icono flor para interior
      case 'exterior': return <BsSun />; // Icono sol para exterior
      case 'aromáticas': return <GiPlantSeed />; // Icono semilla para aromáticas
      default: return <GiPlantWatering />; // Icono riego por defecto
    }
  };

  // Renderizado del componente
  return (
    <motion.section 
      className="cuidados-page" // Clase principal
      initial={{ opacity: 0 }} // Estado inicial invisible
      animate={{ opacity: 1 }} // Animación a visible
      exit={{ opacity: 0 }} // Animación al salir
    >
      {/* Sección hero/encabezado */}
      <div className="hero-cuidados">
        <div className="hero-overlay">
          <h1>Guías de Cuidado</h1> {/* Título principal */}
          <p>Aprende a mantener tus plantas felices y saludables</p> {/* Subtítulo */}
        </div>
      </div>

      {/* Contenedor principal del contenido */}
      <div className="container">
        {/* Filtros por categoría */}
        <div className="filtros">
          {categorias.map(categoria => (
            <button
              key={categoria.id} // Key única para React
              className={`filtro-btn ${activeCategory === categoria.id ? 'active' : ''}`} // Clase condicional
              onClick={() => setActiveCategory(categoria.id)} // Maneja el click
            >
              {getIconForCategory(categoria.id)} {/* Icono de categoría */}
              {categoria.nombre} {/* Nombre de categoría */}
            </button>
          ))}
        </div>

        {/* Grid de guías de cuidado */}
        <motion.div 
          className="guias-grid"
          layout // Habilita animaciones de layout
        >
          {guiasFiltradas.map((guia) => (
            <motion.div 
              key={guia.id} // Key única para React
              className="guia-card"
              layout // Habilita animaciones de layout
              initial={{ opacity: 0, y: 20 }} // Estado inicial
              animate={{ opacity: 1, y: 0 }} // Animación a visible
              transition={{ duration: 0.5 }} // Duración transición
              whileHover={{ scale: 1.02 }} // Efecto hover
            >
              {/* Carrusel de imágenes */}
              <div className="guia-slider">
                <Slider {...sliderSettings}>
                  {guia.imagenes.map((imagen, index) => (
                    <div key={index} className="slider-image">
                      <img 
                        src={imagen} 
                        alt={`${guia.titulo} - Paso ${index + 1}`} // Texto alternativo
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              
              {/* Información de la guía */}
              <div className="guia-info">
                <h3>{guia.titulo}</h3> {/* Título de la guía */}
                <div className="meta-info">
                  <span className="dificultad">{guia.dificultad}</span> {/* Dificultad */}
                  <span className="categoria">
                    {getIconForCategory(guia.categoria)} {/* Icono categoría */}
                    {guia.categoria} {/* Nombre categoría */}
                  </span>
                </div>
                <p>{guia.descripcion}</p> {/* Descripción */}
                
                {/* Lista de consejos */}
                <div className="consejos-list">
                  <h4>Consejos clave:</h4> {/* Subtítulo */}
                  <ul>
                    {guia.consejos.map((consejo, index) => (
                      <li key={index}>
                        <BsCheckCircle className="check-icon" /> {/* Icono check */}
                        {consejo} {/* Texto del consejo */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cuidados;