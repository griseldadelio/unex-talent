import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const CardImage = () => {
  return (
    <Container className="p-3">
      <Row className="p-4" data-aos="fade-right" data-aos-duration="1500">
        <Col xs={12} sm={12} md={4} className="imgcard" />
        <Col xs={12} sm={12} md={8}>
          <h1 className="text-center">METODOLOGÍA DE TRABAJO</h1>
          <br />
          <Row>
            <Col xs={12} sm={12} md={6} className=" lista-icon">
              <ul>
                <li data-aos="zoom-in-up" data-aos-delay="400">
                  Tu socio de RR. HH. externo, sin costos de sueldos que
                  perjudiquen la rentabilidad de tu empresa.
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="450">
                  Mentoring y Coaching empresarial.
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="500">
                  Evaluación y análisis de procesos de Change Management.
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="550">
                  Diseño de job description junto al cliente.
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6} className=" lista-icon">
              <ul>
                <li data-aos="zoom-in-up" data-aos-delay="400">
                  Transnacional: Ofrecemos servicios de RR. HH. a empresas a lo
                  largo de todo el mundo.
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="500">
                  Entrevistas por competencias.
                </li>
                <li data-aos="zoom-in-up" data-aos-duration="500">
                  Seguimiento del candidato hasta 30 días de su ingreso.
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="550">
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
