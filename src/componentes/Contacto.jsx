import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock, BsWhatsapp } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <section className="contacto-section">
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>Visítanos en nuestro vivero</h2>
          <p>
            ¿Tienes dudas sobre el cuidado de tus plantas? ¿Quieres asesoramiento para elegir 
            las especies perfectas? Estamos aquí para ayudarte.
          </p>

          <div className="contacto-details">
            <div className="contacto-item">
              <BsGeoAlt className="contacto-icon" />
              <div>
                <h4>Dirección</h4>
                <p>Calle del Jardín, 456, Barrio Verde, Ciudad</p>
                <a href="#" className="map-link">Ver en mapa</a>
              </div>
            </div>

            <div className="contacto-item">
              <BsTelephone className="contacto-icon" />
              <div>
                <h4>Teléfono</h4>
                <p>+54 11 2345-6789</p>
              </div>
            </div>

            <div className="contacto-item">
              <BsEnvelope className="contacto-icon" />
              <div>
                <h4>Email</h4>
                <p>info@plantitasdeelina.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <BsClock className="contacto-icon" />
              <div>
                <h4>Horario</h4>
                <p>Lunes a Viernes: 8:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
              </div>
            </div>

            <div className="contacto-item whatsapp">
              <BsWhatsapp className="contacto-icon" />
              <div>
                <h4>WhatsApp</h4>
                <p>Consultas rápidas por mensaje</p>
                <a href="#" className="whatsapp-link">Enviar mensaje</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto-form">
          <div className="form-header">
            <FaLeaf className="form-icon" />
            <h3>Envíanos tu consulta</h3>
          </div>
          
          <form>
            <div className="form-group">
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Teléfono (opcional)" />
            </div>
            <div className="form-group">
              <select>
                <option value="">Selecciona un tema</option>
                <option value="cuidados">Cuidados de plantas</option>
                <option value="pedidos">Pedidos especiales</option>
                <option value="talleres">Talleres y eventos</option>
                <option value="otros">Otras consultas</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Cuéntanos sobre tu consulta..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;