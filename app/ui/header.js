'use client';
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LogoBlack } from './unex-logoBlack';
import { LogoWhite } from './unex-logoWhite';
import Link from 'next/link';

export const Header = () => {
  //change navbar color
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        data-="fade-down"
        style={{
          background: isScrolled ? '#ebf1ea' : 'transparent',
          color: isScrolled ? 'black' : 'white',
        }}
        variant="light"
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/" className="mt-2">
            {isScrolled ? <LogoBlack /> : <LogoWhite />}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
              <Link className="ps-4" href="/#contacto">
                <h4>Contacto</h4>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
