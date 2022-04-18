import React from 'react';
import img from '../../Images/Person/srayo.png';

const About = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center mt-1 handleFirstParent' style={{height: '800px'}}>
            <div className='w-75 pe-5' >
                <h1 className='mb-3 text-danger'>The goal of life</h1>
                <p>সালাফদের যোগ্য উত্তরসূরী হয়ে গড়ে উঠাই জীবনের মূল প্রধান লক্ষ্য। অতঃপর দুনিয়ার খাতিরে কিছু লক্ষ্য সবারই থাকা অপরিহার্য। আমার ইচ্ছা প্রথমে ফুল স্টাক ওয়েব ডেভলপার হওয়া। এরপর সম্ভব হলে সফটওয়্যার ইঞ্জিনিয়ার এর দিকে ধাবিত হওয়া। এর জন্য পরিশ্রম করতে সর্বদা মানসিকভাবে প্রস্তুত থাকি ও চেষ্টা করি। আল্ল-হ সুবহানাহু ওয়াতাআ'লার রহমত ও সাহায্য  থাকলে তা একদিন পূরণ হবেই হবে ইন শা আল্ল-হ।
                </p>
            </div>
            <div>
                <img src={img} className="img-fluid w-75" alt="" />
            </div>
        </div>
    );
};

export default About;