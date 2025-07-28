import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BsList, 
  BsTelephone, 
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsFlower1,
  BsDroplet,
  BsSun,
  BsShop
} from "react-icons/bs";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para el efecto de scroll
  const [scrolled, setScrolled] = useState(false);
  
  // Hook para obtener la ruta actual
  const location = useLocation();

  // Función para alternar el menú móvil
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array de enlaces de navegación
  const navLinks = [
    { path: "/", name: "Inicio", icon: <AiOutlineHome className="nav-icon" /> },
    { path: "/plantas-interior", name: "Plantas Interior", icon: <BsFlower1 className="nav-icon" /> },
    { path: "/cuidados", name: "Cuidados", icon: <BsDroplet className="nav-icon" /> },
    { path: "/sobre-nosotros", name: "Sobre Nosotros", icon: <BsShop className="nav-icon" /> },
    { path: "/contacto", name: "Contacto", icon: <AiOutlineMail className="nav-icon" /> }
  ];

  // Array de enlaces a redes sociales
  const socialLinks = [
    { url: "#", icon: <BsWhatsapp className="social-icon" />, name: "WhatsApp" },
    { url: "#", icon: <BsInstagram className="social-icon" />, name: "Instagram" },
    { url: "#", icon: <BsFacebook className="social-icon" />, name: "Facebook" }
  ];

  // Función para manejar el clic en los enlaces
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>


      {/* Navegación principal */}
      <Navbar expand="lg" className="navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img
              src="/img/02-logos/logolasplantitasdeelina.png"
              alt="Las Plantitas de Elina"
              className="logoHeader"
            />
          </Navbar.Brand>

          {/* Botón del menú móvil */}
          <Navbar.Toggle 
            aria-controls="main-navbar" 
            className="navbar-toggler"
            onClick={handleToggleMobileMenu}
            aria-label="Menú de navegación"
          >
            <BsList className="menu-icon" />
            <span className="menu-text">Menú</span>
          </Navbar.Toggle>

          {/* Contenido del menú */}
          <Navbar.Collapse
            id="main-navbar"
            className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto">
              {navLinks.map((link) => (
                <Nav.Item key={link.path}>
                  <Nav.Link
                    as={Link}
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {link.icon}
                    {link.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;