import React from 'react';
import {  useParams } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams()
    return (
        <div className='container text-center mt-3' style={{height: '800px'}}>
            <h1 className='mb-3'>This service id is {id}</h1>
            <p>Thanks for come this page.</p>
        </div>
    );
};

export default Checkout;