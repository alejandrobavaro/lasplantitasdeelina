import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_GaleriaPlantas.scss";

const GaleriaPlantas = () => {
  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: false,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div className="custom-dots-container">
        <ul className="custom-dots">{dots}</ul>
      </div>
    )
  };

  // Flechas personalizadas
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow next-arrow" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow prev-arrow" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  }

  // Imágenes del slider adaptadas para vivero
  const plantImages = [
    {
      src: "/img/04-img-banners/banner1.png",
      alt: "Nuestro vivero - Un oasis de plantas y naturaleza"
    },
    {
      src: "/img/04-img-banners/banner2.png",
      alt: "Plantas de interior - Purifican el aire y decoran tu hogar"
    },
    {
      src: "/img/04-img-banners/banner3.png",
      alt: "Suculentas y cactus - Perfectos para principiantes"
    },
    {
      src: "/img/04-img-banners/banner4.png",
      alt: "Plantas de exterior - Para dar vida a tu jardín"
    },
    {
      src: "/img/04-img-banners/banner5.png",
      alt: "Talleres de cuidado - Aprende con nuestros expertos"
    }
  ];

  return (
    <section className="plant-slider main-slider">
      <div className="slider-frame">
        <Slider {...settings}>
          {plantImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                />
                <div className="image-caption">
                  <h3>{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GaleriaPlantas;