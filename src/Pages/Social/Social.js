import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../FirebasInit/Firebase.init';
import Spinners from '../../Shared/Spinners/Spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errormess;
    if (error || error2 || error3) {

        errormess = <p className='text-danger text-center fw-bolder'> Error: {error ? error?.message : 'Something is wrong!'}</p>
    }
    if (user || user2 || user3) {
        navigate(from, { replace: true });
        // toast('Signed in');
        //   navigate('/home');

    }
    if (loading || loading2 || loading3) {
        return <Spinners></Spinners>;
    }
    return (
        <div className='mt-1 pb-5 container'>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='pt-3 px-3 fw-bold'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            <p className='text-center fw-bold pb-3 pt-2'>To continue, log in here.</p>
            {errormess}
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-secondary rounded-pill w-50'><span className='fs-3'><FcGoogle></FcGoogle></span> <span className='fs-5 text-muted fw-bolder ps-2'>Continue with google</span></button>
            </div>
            <div className='text-center mt-3'>
                <button onClick={() => signInWithFacebook()} className='btn btn-primary border-0 rounded-pill w-50' ><span className='fs-3'><FaFacebook></FaFacebook></span> <span className='fs-5  text-light fw-bolder ps-2'>Continue with facebook</span></button>
            </div>
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGithub()} className='btn btn-dark border border-secondary rounded-pill w-50' ><span className='fs-3'><FaGithub></FaGithub></span> <span className='fs-5 text-light fw-bolder ps-2'>Continue with github</span></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Social;