import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../src/Images/navLogoOrigin.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{height: '50px'}} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;