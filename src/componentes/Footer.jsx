import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp, BsEnvelope, BsFlower1 } from "react-icons/bs";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* Divisor decorativo */}
      <div className="footer-divider"></div>
      
      {/* Contenido principal */}
      <div className="footer-content">
        {/* Logo del vivero */}
        <div className="footer-logo">
          <img 
            src="/img/02-logos/logolasplantitasdeelina.png" 
            alt="Las Plantitas de Elina" 
            className="footer-logo-image"
          />
          <p className="footer-tagline">
            <span className="decorative-initial">P</span>asión por las plantas desde 2013
          </p>
        </div>
        
        {/* Contacto directo */}
        <div className="footer-contact">
          <h3 className="footer-section-title">
            <span className="decorative-initial">C</span>ontacto
          </h3>
          <a href="tel:+5491112345678" className="footer-contact-link">
            <BsWhatsapp className="footer-contact-icon" />
            <span>+54 9 11 1234-5678</span>
          </a>
          <a href="mailto:info@lasplantitasdeelina.com" className="footer-contact-link">
            <BsEnvelope className="footer-contact-icon" />
            <span>info@lasplantitasdeelina.com</span>
          </a>
          <a href="#" className="footer-contact-link">
            <BsFlower1 className="footer-contact-icon" />
            <span>Visítanos en nuestro vivero</span>
          </a>
        </div>
        
        {/* Redes sociales */}
        <div className="footer-social">
          <h3 className="footer-section-title">
            <span className="decorative-initial">S</span>íguenos
          </h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/lasplantitasdeelina" target="_blank" rel="noopener noreferrer" className="social-link">
              <BsInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/lasplantitasdeelina" target="_blank" rel="noopener noreferrer" className="social-link">
              <BsFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Créditos */}
      <FooterGondraWorldDev />
    </footer>
  );
}

export default Footer;