import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';


const Topbar = () => {

  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Password Manage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/home')}>List Password</Nav.Link>
            <Nav.Link onClick={()=>navigate('/add')}>Add Password</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Topbar;
