import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap'

import Main from "../src/components/Main";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"style={{height:"10vh"}}>
        <Navbar.Brand href="#home" style={{ color: "#f26524", fontWeight: "bold" }}>Rhymewit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <ButtonGroup className="mr-4">
              <Button variant="light" type="submit">Log in</Button>{' '}
            </ButtonGroup>
            <ButtonGroup className="mr-4">
              <Button type="submit" style={{ backgroundColor: "#24509e" }}>Sign up</Button>{' '}
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main>

      </Main>
    </div>
  );
}

export default App;
