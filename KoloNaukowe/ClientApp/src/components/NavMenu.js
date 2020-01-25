import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
                    <Link to={'/'} style={{
                        'font-family': 'Imprint MT Shadow', 'font-size':13+'px'
                    }}><i>"Creativity is contagious. Pass it on." </i></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> KOLA NAUKOWE
              </NavItem>
            </LinkContainer>
                    <LinkContainer to={'/addstudent'}>
              <NavItem>
                <Glyphicon glyph='education' /> ZAPIS
              </NavItem>
            </LinkContainer>
            
              <LinkContainer to={'/fetchstudent'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> LISTA STUDENTOW
                         </NavItem>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
