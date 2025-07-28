import React from "react";
import { FaLeaf, FaLinkedin, FaGithub } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev() {
  return (
    <div className="plant-footer">
      {/* Divider con elementos naturales */}
      <div className="nature-divider">
        <FaLeaf className="leaf-icon" />
        <div className="vine-line"></div>
        <FaLeaf className="leaf-icon flipped" />
      </div>
      
      {/* Contenido de créditos */}
      <div className="plant-content">
        <div className="plant-branding">
        
          <a
            href="https://alejandrobavaro.github.io/gondraworld-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Gondra World Dev
          </a>
        </div>
        
        <div className="plant-social">
          <a 
            href="https://www.linkedin.com/in/alejandro-bavaro/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a 
            href="https://github.com/alejandrobavaro" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;