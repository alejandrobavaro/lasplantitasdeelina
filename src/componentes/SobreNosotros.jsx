import React from "react";
import { motion } from "framer-motion";
import { BsFlower1, BsClockHistory, BsPeople, BsTree } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_SobreNosotros.scss";

const SobreNosotros = () => {
  const features = [
    {
      icon: <BsFlower1 />,
      title: "Nuestro Vivero",
      description: "Un espacio lleno de vida donde cultivamos con amor cada planta para que llegue en perfectas condiciones a tu hogar."
    },
    {
      icon: <BsClockHistory />,
      title: "Nuestra Historia",
      description: "Más de 10 años compartiendo nuestra pasión por las plantas y ayudando a crear hogares más verdes."
    },
    {
      icon: <BsPeople />,
      title: "Nuestro Equipo",
      description: "Expertos en botánica y amantes de las plantas, siempre dispuestos a asesorarte en tus cuidados."
    },
    {
      icon: <BsTree />,
      title: "Nuestra Filosofía",
      description: "Cultivo sostenible, amor por la naturaleza y compromiso con el medio ambiente."
    }
  ];

  const equipo = [
    {
      nombre: "Elina",
      rol: "Fundadora y Especialista en Plantas",
      bio: "Con más de 15 años de experiencia en horticultura, Elina creó este vivero para compartir su pasión por las plantas.",
      imagen: "/img/equipo/elina.jpg"
    },
    {
      nombre: "Ale",
      rol: "Especialista en Suculentas",
      bio: "Apasionado por las plantas resistentes, experto en cuidados de cactus y suculentas de todo tipo.",
      imagen: "/img/equipo/carlos.jpg"
    },
    {
      nombre: "Miguel",
      rol: "Diseñadora de Jardines",
      bio: "Especializada en arreglos florales y composiciones de plantas de interior para espacios urbanos.",
      imagen: "/img/equipo/maria.jpg"
    }
  ];

  return (
    <motion.section 
      className="sobre-nosotros-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-sobre-nosotros">
        <div className="hero-overlay">
          <h1><span className="decorative-initial">L</span>as <span className="decorative-initial">P</span>lantitas de Elina</h1>
          <p>Donde la naturaleza y el amor por las plantas se encuentran</p>
        </div>
      </div>

      <div className="container">
        <section className="sobre-nosotros-features">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="sobre-nosotros-historia">
          <motion.div 
            className="historia-content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2><span className="decorative-initial">N</span>uestra <span className="decorative-initial">H</span>istoria</h2>
            <p>
              Fundado en 2013 por Elina Martínez, nuestro vivero comenzó como un pequeño emprendimiento en el patio de su casa. 
              Lo que empezó como un hobby se transformó en un negocio familiar dedicado a compartir el amor por las plantas.
            </p>
            <p>
              Hoy, después de más de una década, hemos ayudado a miles de personas a traer un poco de naturaleza a sus hogares. 
              Nuestro vivero ha crecido, pero nuestro compromiso con la calidad y el cuidado de cada planta sigue siendo el mismo.
            </p>
          </motion.div>
          <motion.div 
            className="historia-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/img/vivero-historia.jpg" alt="Los inicios del vivero en el patio de Elina" />
          </motion.div>
        </section>

        <section className="sobre-nosotros-equipo">
          <h2><span className="decorative-initial">N</span>uestro <span className="decorative-initial">E</span>quipo</h2>
          <p className="equipo-subtitle">Apasionados por las plantas y su cuidado</p>
          
          <div className="equipo-grid">
            {equipo.map((persona, index) => (
              <motion.div 
                key={index}
                className="persona-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="persona-image">
                  <img src={persona.imagen} alt={persona.nombre} />
                </div>
                <div className="persona-info">
                  <h3>{persona.nombre}</h3>
                  <p className="persona-rol">{persona.rol}</p>
                  <p className="persona-bio">{persona.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="sobre-nosotros-galeria">
          <h2><span className="decorative-initial">N</span>uestro <span className="decorative-initial">E</span>spacio</h2>
          <p className="galeria-subtitle">Un vistazo a nuestro vivero</p>
          
          <div className="galeria-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                className="galeria-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={`/img/vivero-galeria/${item}.jpg`} 
                  alt={`Vivero Las Plantitas de Elina - Área ${item}`} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default SobreNosotros;