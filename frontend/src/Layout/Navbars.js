import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Thing uploads</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>DisplayThing</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/AddThing">
            <Nav.Link>AddThing </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/nextWork">
            <Nav.Link>nextWork </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
