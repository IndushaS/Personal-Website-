import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, Container } from 'react-bootstrap';
import headerEmoji from '../assets/myemoji.png'

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navigation">
      <Navbar collapseOnSelect expand='lg' bg='white' variant='light'>
      <Navbar.Brand href="#home"><img height='60px' src={headerEmoji} /> <a>Indusha Semba </a>
      
      </Navbar.Brand>
      
          <Navbar.Toggle aria-controls='responseive-navbar-nav' />
          <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
            <Nav>
               <Nav.Link>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              </Nav.Link>
             
             
              <Nav.Link>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
              </Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
