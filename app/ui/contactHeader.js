import React from 'react';
import { LogoBlack } from './unex-logoBlack';
import Link from 'next/link';
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'react-bootstrap';

export const ContactHeader = () => {
  return (
    <>
      <Navbar
        style={{
          background: '#ebf1ea',
          color: 'black',
        }}
      >
        <Container>
          <NavbarBrand href="/" className="mt-2">
            <LogoBlack />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />

          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mt-4 ms-5">
              <Link className="ps-4" href="/seleccion">
                <h4>Selección</h4>
              </Link>
              <Link className="ps-4" href="/evaluacion">
                <h4>Evaluación</h4>
              </Link>
              <Link className="ps-4" href="/consultoria">
                <h4>Consultoría</h4>
              </Link>
              <Link className="ps-4" href="/contacto">
                <h4>Contacto</h4>
              </Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};
