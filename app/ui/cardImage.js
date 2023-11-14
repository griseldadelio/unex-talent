import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const CardImage = () => {
  return (
    <Container className="p-3">
      <Row className="p-4">
        <Col xs={12} sm={12} md={4} className="imgcard" />
        <Col xs={12} sm={12} md={8}>
          <h3>METODOLOGÍA DE TRABAJO</h3>
          <br />
          <Row>
            <Col xs={12} sm={12} md={6}>
              <ul>
                <li>
                  Tu socio de RR. HH. externo, sin costos de sueldos que
                  perjudiquen la rentabilidad de tu empresa.
                </li>
                <li>Mentoring y Coaching empresarial.</li>
                <li>Evaluación y análisis de procesos de Change Management.</li>
                <li>Diseño de job description junto al cliente.</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <ul>
                <li>
                  Internacional: Ofrecemos servicios de RR. HH. a empresas a lo
                  largo de todo el mundo.
                </li>
                <li>Entrevistas por competencias.</li>
                <li>Seguimiento del candidato hasta 30 días de su ingreso.</li>
                <li>
                  Capacitación personalizada según necesidades del cliente.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
