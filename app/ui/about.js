import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export const About = () => {
  return (
    <Container id="nosotros">
      <Row className="p-4">
        <h2 className="my-4 ">¿Por qué Unex Talent?</h2>
        <Col>
          <p>
            Garantizamos servicio absolutamente personalizado abocado a procesos
            de selección, Head Hunting, capacitación y evaluación de talentos.
            Nuestros más de 20 años de experiencia en capital humano y
            profesionalismo nos permite enfrentarnos a las necesidades tan
            cambiantes del mercado empresarial actual de manera eficiente y con
            costos competitivos. Es nuestro objetivo brindar soluciones de
            excelencia a la medida de nuestros clientes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
