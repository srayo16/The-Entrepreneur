import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../Images/Banner/banner1.jpg';
import banner2 from '../../Images/Banner/banner2.jpg';
import banner3 from '../../Images/Banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='overflow-hidden'>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100 handleImage"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='handleBg rounded'>
                    <h3 className='handleTitle'>The Owner of Udvash</h3>
                    <p className='handleDescrip mt-3'>This is Mahmudul Hasan Sohag.On 2000 year, He established a education institute name 'Udvash-Unmesh'.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid handleImage"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='handleBg rounded'>
                    <h3 className='handleTitle'>The Discoverer of EVM Machine</h3>
                    <p className='handleDescrip mt-3'>Mahmudul Hasan Sohag discoverd EVM Machine for his country for first time.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid handleImage"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='handleBg rounded'>
                    <h3 className='handleTitle'>The Owner of Rokmari</h3>
                    <p className='handleDescrip mt-3'>
                        On 19 January 2012, Mahmudul Hasan Sohag opening a online bookseller institute name 'Rokmari'.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;