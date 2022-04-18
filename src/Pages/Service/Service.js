import React, { useEffect, useState } from 'react';
import udvash from '../../Images/Services/udvash.jpg';
import rokmari from '../../Images/Services/rokmari.jpg';
import repair from '../../Images/Services/repair.jpg';
import ServicePro from '../ServicePro/ServicePro';

const Service = () => {
    const serviceProvider = [
        {
            "name": "Purchase Academic Course",
            "id": 1,
            "description": "You can purchase Admission course. It's launched by Udvash Education Center. It will be very helpful for all category of students. We take special care on our student. Admission time is very important in every students. Every students dream public university. Purchase this course , you will never cut out In shaa Allah. ",
            "price": 2000,
            "img": udvash
        },
        {
            "name": "Buy Your Book",
            "id": 2,
            "description": "It's a bookstore which includes our service. You can buy your favourite books from here. This is the biggest online bookstore in BD. You can visit out website and order from us.",
            "price": "10-500",
            "img": rokmari
        },
        {
            "name": "Fixing Your Software",
            "id": 3,
            "description": "Hack or dumb your software? Don't worry , here I for fixing your software problems. Just knock me and submit your issues.",
            "price": 50,
            "img": repair
        }

    ]

 

    return (
        <div className='container px-4 mt-5 mb-5 pb-5'>
            <h1 className='text-center mt-5'>His Services</h1><hr className='mb-5' />
            <div className='row gx-5 gy-5 mx-auto'>
                {
                    serviceProvider.map(service => <ServicePro key={service.id} service={service}></ServicePro>)
                }
            </div>
        </div>
    );
};

export default Service;