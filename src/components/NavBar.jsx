import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//const btn = document.getElementById('button');


//import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
      <Navbar className="fixed-top" bg="secondary" variant="dark">
        <Container>
          {/* <Navbar.Brand className="navbar-brand" href="#home"> </Navbar.Brand>
          <Nav className="navbar fixed-top navbar-light bg-blue">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
           {/* <nav className="navbar fixed-top navbar-light bg-light">  */}
           
           
  <div className="container-fluid">
    <a className="navbar-brand text-black" href="#">Home</a>
    <a className="navbar-brand" href="#">About</a>
    <a className="navbar-brand" href="#">Contact</a>
  </div>
  
{/* </nav> */}
        </Container>
      </Navbar>

    
  );
};

export default NavBar;