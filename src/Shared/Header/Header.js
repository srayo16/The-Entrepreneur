import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../src/Images/navLogoOrigin.png';
import { Link } from 'react-router-dom';
import auth from '../../FirebasInit/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomLink from '../CustomActiveLink/CustomActiveLink';

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
                            <CustomLink className= 'ps-3' to={'/home'}>Home</CustomLink>
                            <span className='text-warning ps-3 pe-3' style={{cursor: 'pointer'}}>
                            {
                                   user ? user.displayName : ''
                               }
                               </span>
                            {
                                user ? <button onClick={handlelogOut} className='text-light border-0 rounded-pill bg-secondary'>Log Out</button> : <CustomLink className= 'ps-3' to="/login">Log in</CustomLink>
                            }

                            <CustomLink className= 'ps-3' to="/signup">Sign Up</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </div>
    );
};

export default Header;