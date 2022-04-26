import React, { useEffect, useState } from 'react';
import './FirstSection.css';
import person from '../../Images/Person/Mahmudul-hasan.jpg';
const FirstSection = () => {
    const [description, setDescription] = useState([]);
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        fetch('person.json')
            .then(res => res.json())
            .then(data => setDescription(data))
    }, [])

    return (
        <div className='container d-flex justify-content-center align-items-center mt-5 pt-5 handleFirstParent'>
            <div className='w-75 pe-5' >
                <h1>The Life Stroy of<br /><span className='text-danger'>Mahmudul Hasan Sohag</span></h1>
                {
                    description.map(item => <p item={item} key={item.id} className='pt-3'>
                        {!expand && item.description.slice(0, 1000) + '...'} {!expand && <button className='btn btn-light fw-bold text-primary m-0 p-0' onClick={() => setExpand(true)}>Read more</button>}
                        {expand && item.description} {expand && <button className='btn btn-light fw-bold text-primary m-0 p-0' onClick={() => setExpand(false)}>Read less</button>}
                    </p>)
                }

            </div>
            <div>
                <img src={person} alt="" />
            </div>
        </div>
    );
};

export default FirstSection;