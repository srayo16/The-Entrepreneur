import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark bg-gradient text-light text-center p-5'>
            <h3 className='pb-3'>Alright reserved by Srayo</h3>
            <h5>Developed by @Srayo {year}</h5>
        </div>
    );
};

export default Footer;