import React from "react";
import Slider from "react-slick";
import { 
  BsFlower1, 
  BsDroplet, 
  BsSun, 
  BsCheckCircle,
  BsShop,
  BsArrowRight
} from "react-icons/bs";
import { GiPlantWatering, GiPlantSeed } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Inicio.scss";

const Inicio = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const plantasDestacadas = [
    {
      title: "Suculentas Colección Primavera",
      description: "Hermosa selección de suculentas de temporada, perfectas para interiores. Incluye variedades como Echeverias, Sedums y Haworthias, cada una con sus necesidades específicas de luz y agua.",
      images: [
        "/img/plantas/suculentas-1.jpg",
        "/img/plantas/suculentas-2.jpg",
        "/img/plantas/suculentas-3.jpg"
      ],
      tipo: "Suculentas",
      luz: "Luz indirecta brillante",
      riego: "Moderado (cada 10-15 días)"
    },
    {
      title: "Plantas de Interior Purificadoras",
      description: "Kit de plantas que mejoran la calidad del aire en tu hogar. Incluye Lengua de Suegra, Potus y Palmera Areca. Ideales para espacios cerrados y oficinas.",
      images: [
        "/img/plantas/interior-1.jpg",
        "/img/plantas/interior-2.jpg",
        "/img/plantas/interior-3.jpg"
      ],
      tipo: "Interior",
      luz: "Luz media a baja",
      riego: "Regular (semanal)"
    },
    {
      title: "Cactus Mini Jardín",
      description: "Encantadora composición de cactus pequeños en maceta de terracota. Incluye variedades como Mammillaria, Gymnocalycium y Rebutia. Perfectos para principiantes.",
      images: [
        "/img/plantas/cactus-1.jpg",
        "/img/plantas/cactus-2.jpg",
        "/img/plantas/cactus-3.jpg"
      ],
      tipo: "Cactus",
      luz: "Luz directa",
      riego: "Escaso (cada 20-30 días)"
    }
  ];

  const serviciosVivero = [
    {
      icon: <GiPlantWatering />,
      title: "Asesoramiento Personalizado",
      description: "Te ayudamos a elegir las plantas perfectas para tu espacio y estilo de vida."
    },
    {
      icon: <GiPlantSeed />,
      title: "Kit de Iniciación",
      description: "Todo lo necesario para comenzar tu colección de plantas, incluyendo sustratos y guías."
    },
    {
      icon: <FaLeaf />,
      title: "Talleres de Cuidados",
      description: "Aprende técnicas básicas de cuidado y mantenimiento de plantas en nuestros talleres."
    }
  ];

  const guiaCuidados = [
    {
      title: "1. Evaluación de Espacio",
      description: "Analizamos la luz y condiciones de tu hogar para recomendarte las plantas ideales."
    },
    {
      title: "2. Selección de Especies",
      description: "Te mostramos las variedades que mejor se adaptan a tus condiciones."
    },
    {
      title: "3. Instrucciones de Cuidado",
      description: "Recibirás una guía personalizada para cada planta que adquieras."
    },
    {
      title: "4. Soporte Continuo",
      description: "Respondemos tus consultas y te ayudamos con cualquier problema que surja."
    },
    {
      title: "5. Comunidad PlantLover",
      description: "Acceso a nuestro grupo exclusivo de cuidados y consejos."
    }
  ];

  return (
    <main className="main-content">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Descubre el mundo verde de <span>Las Plantitas de Elina</span></h1>
          <p>Plantas saludables y felices para hacer de tu hogar un oasis natural</p>
          <button className="btn-primary">
            Ver colección <BsArrowRight className="icon-right" />
          </button>
        </div>
      </section>

      {/* Sección Plantas Destacadas */}
      <section className="plantas-destacadas">
        <div className="container">
          <h2 className="section-title">Nuestras Plantas Estrella</h2>
          <p className="section-subtitle">
            Cada planta es seleccionada con cuidado para garantizar su salud y belleza
          </p>
          
          <Slider {...sliderSettings} className="plantas-slider">
            {plantasDestacadas.map((planta, index) => (
              <div key={index} className="planta-item">
                <div className="planta-gallery">
                  {planta.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="gallery-img-container">
                      <img src={img} alt={`${planta.title} - Detalle ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>
                
                <div className="planta-info">
                  <h3>{planta.title}</h3>
                  <p className="descripcion">{planta.description}</p>
                  
                  <div className="cuidados-list">
                    <h4>Recomendaciones de cuidado:</h4>
                    <ul>
                      <li>
                        <BsCheckCircle className="check-icon" /> <strong>Tipo:</strong> {planta.tipo}
                      </li>
                      <li>
                        <BsCheckCircle className="check-icon" /> <strong>Luz:</strong> {planta.luz}
                      </li>
                      <li>
                        <BsCheckCircle className="check-icon" /> <strong>Riego:</strong> {planta.riego}
                      </li>
                    </ul>
                  </div>
                  
                  <button className="btn-details">
                    Más detalles <BsArrowRight className="icon-right" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sección Nuestros Servicios */}
      <section className="servicios-section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          
          <div className="servicios-grid">
            {serviciosVivero.map((servicio, index) => (
              <div key={index} className="servicio-card">
                <div className="servicio-icon">
                  {servicio.icon}
                </div>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Guía de Cuidados */}
      <section className="guia-section">
        <div className="container">
          <div className="guia-content">
            <div className="guia-text">
              <h2>Guía de Cuidados para Principiantes</h2>
              <p>Sigue estos pasos para convertirte en un experto en plantas:</p>
              
              <div className="pasos-container">
                {guiaCuidados.map((paso, index) => (
                  <div key={index} className="paso-item">
                    <div className="paso-number">{index + 1}</div>
                    <div>
                      <h4>{paso.title}</h4>
                      <p>{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="guia-image">
              <img src="/img/guia-cuidados.jpg" alt="Guía de cuidados de plantas" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para comenzar tu jardín interior?</h2>
          <p>Visítanos o contáctanos para recibir asesoramiento personalizado</p>
          <button className="btn-primary">
            Contactar <BsArrowRight className="icon-right" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Inicio;