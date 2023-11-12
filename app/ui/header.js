'use client';
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Logo } from './unex-logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import en from '../../public/locale/en';
import es from '../../public/locale/es';

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

  //I18 translate
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? en : es;

  return (
    <>
      <Navbar
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
            <Logo />
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
              <Link className="ps-4" href="/capacitacion">
                <h4>Capacitación</h4>
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
