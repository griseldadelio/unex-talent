import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Seleccion() {
  return (
    <>
      <div
        style={{ minHeight: '600px', paddingTop: '25px' }}
        className=" bg-image search d-flex justify-content-center align-items-center "
      >
        <h1 className="text-center display-5 fw-bold">
          <b>BÚSQUEDA Y SELECCIÓN</b>
        </h1>
      </div>
      <Container className="p-5 ">
        <br />
        <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
          <Col>
            <h2 className="px-4"> EXECUTIVE SEARCH</h2>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4"
            >
              BÚSQUEDAS GERENCIALES, ESPECIALISTAS Y PROFESIONALES
            </p>
            <ul>
              <li data-aos="zoom-in-up" data-aos-delay="450">
                Unex Talent diseña junto al cliente el job description que se
                ajuste a las necesidades del rol a cubrir.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="500">
                Detectamos talentos en base a la publicación del aviso que
                atraiga al candidato ideal.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="550">
                Identificamos proactivamente key people en el mercado laboral.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="600">
                Identificamos competencias conductuales favoreciendo la
                adecuación puesto - persona.
              </li>
            </ul>
          </Col>
          <Col>
            <h2 className="px-4"> HEAD HUNTING</h2>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4 pb-4"
            >
              CAPTACIÓN DE TALENTOS.
            </p>
            <ul>
              <li data-aos="zoom-in-up" data-aos-delay="450">
                El principal valor que distingue a Unex Talent es el nivel de
                confidencialidad del proceso garantizando discreción tanto para
                la empresa como para el candidato.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="500">
                Generamos en el candidato la necesidad real de cambio que
                implica un nuevo desafío.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="550">
                Encontramos candidatos que aportan empleabilidad destacándolos
                en el mercado laboral.
              </li>
            </ul>
          </Col>
          <Col>
            <h2 className="px-4"> IT RECRUITING</h2>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4"
            >
              BÚSQUEDAS DE PROFESIONALES DE SISTEMAS Y TECNOLOGÍA
            </p>
            <ul>
              <li data-aos="zoom-in-up" data-aos-delay="400">
                En Unex Talent, tenemos un equipo de recruiters abocados de
                lleno al mundo IT.
              </li>
              <li data-aos="zoom-in-up" data-aos-delay="450">
                Nos basamos en procesos de selección enfocados en el perfil
                tecnológico partiendo de un profundo entendimiento de los
                detalles técnicos y amplio conocimiento del mercado tecnológico.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
