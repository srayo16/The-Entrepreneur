import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../FirebasInit/Firebase.init';
import Spinners from '../../Shared/Spinners/Spinners';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const mail = useRef('');
    const pass = useRef('');
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errormess;
    if (error) {
        return (
            errormess = <p className='text-danger text-center fw-bolder'> Error:  {error ? error?.message : 'Something is wrong!'}</p>

        );
    }
    if (loading ) {
        return <Spinners></Spinners>;
    }
    if(user){
        navigate(from, { replace: true });
    }
    const onsubLog = async event =>{
        event.preventDefault();
        const email = mail.current.value;
        const password = pass.current.value;

       await signInWithEmailAndPassword(email, password);
       toast('Logged in');
    }
    return (
        <div className='container mt-3'>
            <h1 className='text-center'>Please Log In</h1>
            <div className='handleSize mx-auto'>
                <Form onSubmit={onsubLog}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={mail} type="email" placeholder="Enter email" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={pass} type="password" style={{ height: '50px' }} placeholder="Password" />
                    </Form.Group>
                    <Button variant="secondary" type="submit" className=' rounded-pill handleSubBtn'>
                        Log in
                    </Button>
                </Form>
                {errormess}
                <Link to='/signup' className=' btn btn-link rounded-pill text-decoration-none handleSubBtn2 text-danger fw-bolder'>Are you new user?</Link>
                <Social></Social>
                <ToastContainer />


            </div>
        </div>
    );
};

export default Login;