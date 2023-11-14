import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Evaluacion() {
  return (
    <>
      <div
        style={{ minHeight: '600px', paddingTop: '25px' }}
        className=" bg-image evaluation d-flex justify-content-center align-items-center "
      >
        <h2 className="text-center display-5 fw-bold">
          <b>EVALUACIÓN DE PERSONAL</b>
        </h2>
      </div>
      <Container className="p-5 ">
        <br />
        <Row className="mt-3">
          <Col xs={12} sm={12} md={4}>
            <Image
              src="/assesstment.png"
              alt="Unex Talent Assesstment"
              width="300"
              height="200"
              className="p-2 "
            ></Image>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <h3 className="px-4"> ASSESSMENT CENTER</h3>
            <p>
              En Unex Talent diseñamos actividades lúdicas en las que se evalúan
              los comportamientos de los candidatos (negociación, interacción,
              liderazgo, capacidad de comunicación, etc) partiendo de la mirada
              de más de un evaluador.
            </p>
          </Col>

          <Row className="mt-3">
            <Col>
              <h3 className="px-4"> PSICOTÉCNICOS</h3>
              <p>
                En Unex Talent contamos con psicólogos especializados en el área
                laboral. Utilizamos: Tests Psicométricos (Raven, DISC), Test
                Neuropsicológico (Bender), Tests Proyectivos (HTP, Persona Bajo
                la Lluvia, Cuestionario Desiderativo, Rorschach, Zulliger).
              </p>
            </Col>
            <Col>
              <Image
                src="/psicotecnico.png"
                alt="Unex Talent Psicotecnico"
                width="500"
                height="400"
              ></Image>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} sm={12} md={4}>
              <Image
                src="/managment.png"
                alt="Unex Talent Assesstment"
                width="300"
                height="200"
                className="p-2 mt-3"
              ></Image>
            </Col>
            <Col xs={12} sm={12} md={8}>
              <h3 className="px-4">
                CHANGE MANAGEMENT Y DISEÑO DE DESCRIPCIONES DE PUESTOS
              </h3>
              <p>
                Desde Unex Talent acompañamos el proceso de cambio de las
                organizaciones implementando un análisis de la situación actual.
                Nuestra mirada a futuro se centra en la modificación de
                comportamientos actuales de los colaboradores que permitan
                alcanzar ese objetivo y especialmente analizamos la valoración
                cuantitativa de esos cambios que impactan en la rentabilidad de
                la empresa. Para el éxito de este proceso diseñamos y redactamos
                junto al cliente los job description que definen cada rol dentro
                de la compañía buscando la adecuación puesto – persona que
                transforman colaboradores productivos y rentables.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
