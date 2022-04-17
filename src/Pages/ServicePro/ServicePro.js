import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ServicePro = ({ service }) => {
    const { name, img, price, id, description } = service;
    const [expand, setExpand] = useState(false);
    return (
        <div className='col'>
            <Card className='' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='img-fluid' style={{height: '225px'}} src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {!expand && description.slice(0,100) +'...'} {!expand && <button className='btn btn-light fw-bold text-primary m-0 p-0' onClick={() => setExpand(true)}>Read more</button>}
                   {expand && description} {expand && <button className='btn btn-light fw-bold text-primary m-0 p-0' onClick={() => setExpand(false)}>Read less</button>}
                </Card.Text>
                <Card.Text>
                    <small className='fw-bold text-center'>Price/Price-range/Charge: <span className='text-danger'>${price}</span></small>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default ServicePro;