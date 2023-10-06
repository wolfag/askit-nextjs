'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props = {};

export default function AppHeader({}: Props) {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link className='navbar-brand' href='/'>
          Wolfag
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' href='/products'>
              Products
            </Link>
            <Link className='nav-link' href='/youtube'>
              Youtube
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
