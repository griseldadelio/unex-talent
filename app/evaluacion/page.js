import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Evaluacion() {
  return (
    <>
      <div
        style={{ minHeight: '600px', paddingTop: '25px' }}
        className=" bg-image evaluation d-flex justify-content-center align-items-center "
      >
        <h1>
          <b>EVALUACIÓN DE PERSONAL</b>
        </h1>
      </div>
      <Container className="p-5 ">
        <br />
        <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
          <h2 className="px-4"> ASSESSMENT CENTER</h2>
          <p data-aos="zoom-in-up" data-aos-delay="450">
            En Unex Talent diseñamos actividades lúdicas en las que se evalúan
            los comportamientos de los candidatos (negociación, interacción,
            liderazgo, capacidad de comunicación, etc) partiendo de la mirada de
            más de un evaluador.
          </p>

          <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="px-4"> PSICOTÉCNICOS</h2>
            <p data-aos="zoom-in-up" data-aos-delay="450">
              En Unex Talent contamos con psicólogos especializados en el área
              laboral. Utilizamos: Tests Psicométricos (Raven, DISC), Test
              Neuropsicológico (Bender), Tests Proyectivos (HTP, Persona Bajo la
              Lluvia, Cuestionario Desiderativo, Rorschach, Zulliger).
            </p>
          </Row>
          <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="px-4">
              CHANGE MANAGEMENT Y DISEÑO DE DESCRIPCIONES DE PUESTOS
            </h2>
            <p data-aos="zoom-in-up" data-aos-delay="400">
              Desde Unex Talent acompañamos el proceso de cambio de las
              organizaciones implementando un análisis de la situación actual.
              Nuestra mirada a futuro se centra en la modificación de
              comportamientos actuales de los colaboradores que permitan
              alcanzar ese objetivo y especialmente analizamos la valoración
              cuantitativa de esos cambios que impactan en la rentabilidad de la
              empresa. Para el éxito de este proceso diseñamos y redactamos
              junto al cliente los job description que definen cada rol dentro
              de la compañía buscando la adecuación puesto – persona que
              transforman colaboradores productivos y rentables.
            </p>
          </Row>
        </Row>
      </Container>
    </>
  );
}