import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../src/Images/navLogoOrigin.png';
import { Link } from 'react-router-dom';
import auth from '../../FirebasInit/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handlelogOut = () => {
        signOut(auth).then(() => {
            toast('Signed Out');
        }).catch((error) => {
            alert(error.message);
        });
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                            <Nav.Link className='text-warning' as={Link} to={'/'}>
                            {
                                   user ? user.displayName : ''
                               }
                               </Nav.Link>
                            {
                                user ? <button onClick={handlelogOut} className='text-light border-0 rounded-pill bg-dark'>Log Out</button> : <Nav.Link  as={Link} to="/login">Log in</Nav.Link>
                            }

                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </div>
    );
};

export default Header;