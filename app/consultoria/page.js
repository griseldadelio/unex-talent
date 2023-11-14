import React from 'react';
import { Header } from '../ui/header';
import { Container, Row, Col } from 'react-bootstrap';

export default function Consultoria() {
  return (
    <>
      <Header />
      <div
        style={{ minHeight: '600px', paddingTop: '25px' }}
        className=" bg-image consultoria d-flex justify-content-center align-items-center "
      >
        <h2 className="text-center display-5 fw-bold">
          <b>CONSULTORÍA EN RRHH</b>
        </h2>
      </div>
      <Container className="p-5 ">
        <br />
        <Row className="mt-3">
          <Col>
            <h3 className="px-2"> COACHING </h3>
            <p className="pt-sm-2 pt-md-5">
              El <b>Coaching </b> es el acompañamiento y entrenamiento a una
              persona enfocado en que alcance las metas que se haya propuesto.
              En el proceso aprenderá a detectar y a potenciar tanto sus
              habilidades como sus competencias del mismo modo que será capaz de
              desbloquear aquellos obstáculos que le impiden alcanzar su máximo
              potencial. Desde <b>Unex Talent </b> trabajamos con nuestros
              clientes definiendo los colaboradores key people que requieran
              desarrollar habilidades específicas para mejorar el desempeño
              exitoso.
            </p>
          </Col>
          <Col>
            <h3 className="px-2"> CAPACITACIÓN Y ENTRENAMIENTO</h3>
            <p className=" pt-sm-2 pt-md-3">
              En <b>Unex Talent </b> dirigimos este proceso enfocándonos en la
              estrategia empresarial de nuestros clientes. En este sentido, un
              buen diagnóstico de las necesidades de la empresa es el primer
              paso de un proceso exitoso. Nuestras metodologías de capacitación
              / entrenamiento se desarrollan dentro o fuera de la empresa y los
              contenidos y duración son definidos ajustándonos a las
              especificaciones del cliente.
            </p>
          </Col>
          <Col>
            <h3 className="px-2"> MENTORING</h3>
            <p className=" pt-sm-2 pt-md-5">
              El <b>Mentoring</b> es una estrategia formativa por la cual un
              especialista en un área determinada transmite sus conocimientos y
              habilidades a una persona para ayudarla a que se desarrolle
              profesionalmente. Para ello <b>Unex Talent </b> se centra en un
              proceso de aprendizaje personalizado que permite desarrollar o
              adquirir habilidades y competencias, generando un nuevo menú de
              acciones para desenvolverse eficazmente ante nuevas situaciones o
              necesidades en su rol laboral.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
