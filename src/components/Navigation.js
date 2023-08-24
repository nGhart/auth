import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Logout from './Logout';

function Navigation() {
  return (
    <Container fluid>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ boxShadow: '2px 2px 2px grey' }}
      >
        <Container>
          <Navbar.Brand>
            <span className="material-symbols-outlined buttonText">groups</span>
          </Navbar.Brand>
          <Logout />
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
