import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../FirebasInit/Firebase.init';
import { async } from '@firebase/util';
import Spinners from '../../Shared/Spinners/Spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);

    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const nameInput = useRef('');
    const emailInput = useRef('');
    const passwordInput = useRef('');
    const confirmPasswordInput = useRef('');
    let errormess;
    if (error || error2 || error3) {
        return (
            errormess = <p className='text-danger text-center fw-bolder'> Error: {error ? error?.message : 'Something is wrong!'}</p>

        );
    }
    if (loading || updating || sending) {
        return <Spinners></Spinners>;
    }
    const signupSub = async event => {
        event.preventDefault();
        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const confirmpass = confirmPasswordInput.current.value;
        if (password === confirmpass) {
            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            toast('Sent email');
            await updateProfile({ displayName: name })
            toast("Signed In");


        }

        else {
            alert('password did not matched');
        }

    }


    return (
        <div className='container mt-3'>

            <h1 className='text-center'>Please Sign Up</h1>

            <div className='handleSize mx-auto'>
                <Form onSubmit={signupSub}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameInput} type="name" placeholder="Enter name" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailInput} type="email" placeholder="Enter email" style={{ height: '50px' }} required />
                        <Form.Text className="text-muted handleText">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordInput} type="password" style={{ height: '50px' }} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword" required>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordInput} type="password" style={{ height: '50px' }} placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" style={{ color: agree ? 'green' : 'red' }} onClick={() => setAgree(!agree)} name='terms' label="Accepts all terms" />
                    </Form.Group>
                    {errormess}
                    <Button disabled={!agree} variant="secondary" type="submit" className=' rounded-pill handleSubBtn'>
                        Sign Up
                    </Button>
                </Form>

                <Link to='/login' className=' btn btn-link rounded-pill text-decoration-none handleSubBtn2 text-danger fw-bolder'>Already have an account</Link>
                <Social></Social>
                <ToastContainer />

            </div>

        </div>
    );
};

export default Signup;