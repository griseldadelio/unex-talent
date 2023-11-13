import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Logo } from '../ui/unex-logo';
import * as Icon from 'react-bootstrap-icons';
import '../ui/ui.css';

export const Footer = () => {
  return (
    <footer id="contacto">
      <Container className="main-footer  text-center">
        <Row>
          <Col xs={12} sm={12} md={4} className="mt-3">
            <Logo />
            <p className="text-center mt-2">Your Next Talent</p>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className="pt-3">
              <Icon.Envelope />
              <a className="changepage ps-2" href="mailto:info@unextalent.com">
                info@unextalent.com
              </a>
            </div>
            <div className="pt-3">
              <Icon.GeoAlt />
              &nbsp; O"Higgins 2199, CABA, Buenos Aires.
            </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className="pt-3">
              <Icon.Whatsapp color="#0f9948" />
              <a
                href="https://api.whatsapp.com/send?phone=549111165109632&text=Hola Unex Talent, necesito más información!"
                target="blank"
                className="changepage"
              >
                &nbsp; (549) 1137947709
              </a>
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
      <div className="sign">
        © 2023 Unex Talent. Todos Los Derechos Reservados
      </div>
    </footer>
  );
};
