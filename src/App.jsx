import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos base de Bootstrap
import "./assets/scss/_01-General/_App.scss"; // Estilos personalizados
import Header from "./componentes/Header"; // Cabecera del sitio
import Inicio from "./componentes/Inicio"; 
import Footer from "./componentes/Footer"; // Pie de página
import Contacto from "./componentes/Contacto"; // Página de contacto
import WhatsappButton from "./componentes/WhatsappButton"; // Botón flotante de WhatsApp
import GaleriaPlantas from "./componentes/GaleriaPlantas"; 
import PlantasInterior from "./componentes/PlantasInterior"; 
import Cuidados from "./componentes/Cuidados"; 
import SobreNosotros from "./componentes/SobreNosotros"; // Página sobre nosotros (antes SobreNosotros)

const AppContent = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  
  return (
    <>
      <Header /> {/* Cabecera fija en todas las páginas */}
      
      {/* Contenedor principal que compensa el header fixed */}
      <div className="main-content-wrapper">
        {/* Muestra el slider solo en la página de inicio */}
        {location.pathname === "/" && <GaleriaPlantas />}
        
        <main> {/* Contenido principal */}
          <Routes> {/* Configuración de rutas */}
            <Route path="/" element={<Inicio />} /> {/* Home */}
            <Route path="/plantas-interior" element={<PlantasInterior />} /> {/* Plantas de interior */}
            <Route path="/cuidados" element={<Cuidados />} /> {/* Guía de cuidados */}
            <Route path="/sobre-nosotros" element={<SobreNosotros />} /> {/* Sobre el vivero */}
            <Route path="/contacto" element={<Contacto />} /> {/* Contacto */}
          </Routes>
        </main>
        
        <Footer /> {/* Pie de página */}
        <WhatsappButton /> {/* Botón flotante de WhatsApp */}
      </div>
    </>
  );
};

// Componente principal que envuelve todo con el Router
function App() {
  return (
    <Router> {/* Proveedor de rutas */}
      <AppContent /> {/* Contenido de la aplicación */}
    </Router>
  );
}

export default App;