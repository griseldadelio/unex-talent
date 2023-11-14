import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export const Formulario = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> Your Phone Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control className="p-5" type="text" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Button>
          <b>Enviar</b>
        </Button>
      </Row>
    </Container>
  );
};
