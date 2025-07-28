import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/scss/_03-Componentes/_PlantasInterior.scss';

const PlantasInterior = () => {
  // Datos de las plantas de interior
  const plantas = [
    {
      id: 1,
      nombre: "Potus",
      nombreCientifico: "Epipremnum aureum",
      imagen: "/img/plantas/potus.jpg",
      cuidados: "Luz indirecta, riego moderado",
      precio: "$1.500"
    },
    {
      id: 2,
      nombre: "Sansevieria",
      nombreCientifico: "Sansevieria trifasciata",
      imagen: "/img/plantas/sansevieria.jpg",
      cuidados: "Poca agua, luz baja o indirecta",
      precio: "$2.200"
    },
    {
      id: 3,
      nombre: "Ficus Lyrata",
      nombreCientifico: "Ficus lyrata",
      imagen: "/img/plantas/ficus.jpg",
      cuidados: "Luz brillante, riego regular",
      precio: "$3.800"
    },
    {
      id: 4,
      nombre: "Monstera",
      nombreCientifico: "Monstera deliciosa",
      imagen: "/img/plantas/monstera.jpg",
      cuidados: "Luz indirecta, humedad media",
      precio: "$4.500"
    },
    {
      id: 5,
      nombre: "Zamioculca",
      nombreCientifico: "Zamioculcas zamiifolia",
      imagen: "/img/plantas/zamioculca.jpg",
      cuidados: "Resistente, poca agua",
      precio: "$2.800"
    },
    {
      id: 6,
      nombre: "Calathea",
      nombreCientifico: "Calathea orbifolia",
      imagen: "/img/plantas/calathea.jpg",
      cuidados: "Humedad alta, luz filtrada",
      precio: "$3.200"
    }
  ];

  return (
    <Container className="plantas-interior-container py-5">
      <h1 className="text-center mb-5">Plantas de Interior</h1>
      <p className="intro-text text-center mb-5">
        Descubre nuestra selección de plantas de interior perfectas para dar vida a tus espacios. 
        Todas nuestras plantas son cultivadas con cuidado y amor para asegurar su salud y belleza.
      </p>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {plantas.map((planta) => (
          <Col key={planta.id}>
            <Card className="h-100 planta-card">
              <Card.Img 
                variant="top" 
                src={planta.imagen} 
                alt={planta.nombre}
                className="planta-imagen"
              />
              <Card.Body>
                <Card.Title>{planta.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {planta.nombreCientifico}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Cuidados:</strong> {planta.cuidados}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-top-0">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="precio">{planta.precio}</span>
                  <button className="btn-comprar">Consultar</button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="tips-cuidados mt-5 p-4">
        <h2 className="mb-4">Consejos para el cuidado de tus plantas</h2>
        <ol>
          <li>Riega según las necesidades específicas de cada planta</li>
          <li>Proporciona la cantidad adecuada de luz solar</li>
          <li>Mantén la humedad ambiental cuando sea necesario</li>
          <li>Limpia las hojas regularmente para permitir la fotosíntesis</li>
          <li>Trasplanta cuando las raíces sobresalgan del macetero</li>
        </ol>
      </div>
    </Container>
  );
};

export default PlantasInterior;