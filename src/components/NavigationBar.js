import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import styled from 'styled-components';
import Translate from 'react-translate-component';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
      &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  const changeLanguage = () => {
    console.log('en');
    localStorage.setItem('lang', 'en');
    window.location.reload(false);
  };

  const changeLanguageFr = () => {
    console.log('fr');
    localStorage.setItem('lang', 'fr');
    window.location.reload(false);
  };

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Gaming Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link id="RouterNavLink" to="/">
                  <Translate content="Home" className="class" />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link id="RouterNavLink" to="/gameArea">
                  <Translate content="GameArea" className="class" />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/subscription">
                  {' '}
                  <Translate content="Subscription" className="class" />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Translate content="Langagues" className="class" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={changeLanguage}>
                  {' '}
                  <Translate content="English" className="class" />
                </DropdownItem>
                <DropdownItem onClick={changeLanguageFr}>
                  {' '}
                  <Translate content="French" className="class" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};