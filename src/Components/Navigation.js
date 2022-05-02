import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LoginModal from './Modal/LoginModal';

function Navigation() {
  return (
    <div>
      <Navbar bg="primary" color='white' expand="lg">
  <Container>
    <Navbar.Brand href="#logo" style={{
      color: 'white',
      fontWeight: '700',
      fontSize: '30px'
      }}>
      TechShop
    <i className='fa-solid fa-shop'></i>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" >
        <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
        <Nav.Link href="#link" className='text-light'>About</Nav.Link>
        <Nav.Link href='#Services'className='text-light'>Services</Nav.Link>
        <Nav.Link href='#Contacts' className='text-light'>Contacts</Nav.Link>

      </Nav>      
    </Navbar.Collapse>
    <LoginModal/>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation
