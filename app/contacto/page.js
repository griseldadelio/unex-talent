'use client';
import React from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import { Formulario } from '../ui/form';
import { ContactHeader } from '../ui/contactHeader';
import * as Icon from 'react-bootstrap-icons';

export default function Contacto() {
  return (
    <>
      <ContactHeader />
      <Container>
        <Row className="m-5 ">
          <Col xs={12} sm={12} md={6}>
            <Formulario />
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className="pt-3">
              <Link className="changepage" href="mailto:info@unextalent.com">
                info@unextalent.com
              </Link>
            </div>
            <div className="pt-3">
              <Link
                href="https://api.whatsapp.com/send?phone=5491137947709&text=Hola Unex Talent, necesito más información!"
                target="blank"
                className="changepage"
              >
                (549) 1137947709
              </Link>
            </div>
            <div className="pt-3">
              &nbsp;O'Higgins 2199, C1428 AGG
              <br />
              &nbsp;Ciudad de Buenos Aires, Argentina
            </div>
            <div className="pt-3">
              &nbsp; Av. De Atenas 46, CP 28290
              <br />
              &nbsp; Las Rozas de Madrid, Madrid.
            </div>
            <div className="social-media">
              <a
                className="link"
                href="https://www.linkedin.com/in/unextalent/"
                target="blank"
              >
                <Icon.Linkedin className="Icon" />
              </a>
              <a
                className="link"
                href="https://www.instagram.com/unextalent/"
                target="blank"
              >
                <Icon.Instagram className="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7834160860148!2d-58.45607462407125!3d-34.55903875514033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d2c53fe293%3A0x6d54bea7d55f68a!2sO&#39;Higgins%202199%2C%20C1428%20AGG%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1699979906922!5m2!1ses!2sar"
          width="600"
          height="450"
        />
      </Row>
    </>
  );
}
