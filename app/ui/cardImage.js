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
                  <b>Tu socio de RR. HH.</b> externo, sin costos de sueldos que
                  perjudiquen la rentabilidad de tu empresa.
                </li>
                <li>
                  Mentoring y <b>Coaching </b> empresarial.
                </li>
                <li>
                  Evaluación y análisis de procesos de <b>Change Management</b>.
                </li>
                <li>
                  Diseño de <b>Job description</b> junto al cliente.
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <ul>
                <li>
                  <b>Servicio Internacional:</b> Ofrecemos servicios de RR. HH.
                  a empresas a lo largo de todo el mundo.
                </li>
                <li>
                  Entrevistas por <b>competencias</b>.
                </li>
                <li>Seguimiento del candidato hasta 30 días de su ingreso.</li>
                <li>
                  <b>Capacitación</b> personalizada según necesidades del
                  cliente.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
