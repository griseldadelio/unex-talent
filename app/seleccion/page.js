import React from 'react';
import { Header } from '../ui/header';
import { Container, Row, Col } from 'react-bootstrap';

export default function Seleccion() {
  return (
    <>
      <Header />
      <div
        style={{ minHeight: '600px', paddingTop: '25px' }}
        className=" bg-image search d-flex justify-content-center align-items-center "
      >
        <h2 className="text-center display-5 fw-bold">
          <b>BÚSQUEDA Y SELECCIÓN</b>
        </h2>
      </div>
      <Container className="p-5 ">
        <br />
        <Row className="mt-3">
          <Col>
            <h3 className="px-4"> EXECUTIVE SEARCH</h3>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4"
            >
              BÚSQUEDAS GERENCIALES, ESPECIALISTAS Y PROFESIONALES
            </p>
            <ul>
              <li>
                <b>Unex Talent </b> diseña junto al cliente el job description
                que se ajuste a las necesidades del rol a cubrir.
              </li>
              <li>
                Detectamos talentos en base a la publicación del aviso que
                atraiga al candidato ideal.
              </li>
              <li>
                Identificamos proactivamente key people en el mercado laboral.
              </li>
              <li>
                Identificamos competencias conductuales favoreciendo la
                adecuación puesto - persona.
              </li>
            </ul>
          </Col>
          <Col>
            <h3 className="px-4"> HEAD HUNTING</h3>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4 pb-4"
            >
              CAPTACIÓN DE TALENTOS.
            </p>
            <ul>
              <li>
                El principal valor que distingue a <b>Unex Talent </b> es el
                nivel de confidencialidad del proceso garantizando discreción
                tanto para la empresa como para el candidato.
              </li>
              <li>
                Generamos en el candidato la necesidad real de cambio que
                implica un nuevo desafío.
              </li>
              <li>
                Encontramos candidatos que aportan empleabilidad destacándolos
                en el mercado laboral.
              </li>
            </ul>
          </Col>
          <Col>
            <h3 className="px-4"> IT RECRUITING</h3>
            <p
              style={{ color: '#0f9948', fontStyle: 'italic' }}
              className="ms-4"
            >
              BÚSQUEDAS DE PROFESIONALES DE SISTEMAS Y TECNOLOGÍA
            </p>
            <ul>
              <li>
                En <b>Unex Talent </b> , tenemos un equipo de recruiters
                abocados de lleno al mundo IT.
              </li>
              <li>
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
