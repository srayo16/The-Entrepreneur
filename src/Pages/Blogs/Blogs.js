import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (

        <div className='container shadow-lg p-3 mb-5 mt-3 bg-body rounded handlepart'>
            <h1 className='text-center text-danger '>Que Ans</h1>
            <hr />
            <div className='mt-5'>
                <p className='fw-bold'>প্রশ্নঃ অথোরিজেশন এবং অথেনটিকেশনের মধ্যে পার্থক্য কি?</p>
                <p className='fw-bold'>উত্তর:
                </p>
                <div className="container px-4">
                    <div className="row gx-5 gy-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='border rounded p-3' style={{ height: '225px' }}>
                                <p className='fw-bold'>অথোরিজেশন</p>
                                <p> <li>অথোরিজেশন ইউজার কোন রিসোর্সে এক্সেস করবে তা নির্ধারণ করে</li>
                                    <li>অথোরিজেশন সেইসব সেটিংসের মাধ্যমে কাজ করতে পারে যেগুলা    অরগানাইজেশান কর্তৃক মেইনটেইন/সরবরাহ করা হয়</li>
                                    <li>অথোরিজেশন ইউজার দেখতে কিংবা পরিবর্তন কর‍তে পারে না।</li>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='border rounded p-3' style={{ height: '225px' }}>
                                <p className='fw-bold'>অথেনটিকেশন</p>
                                <li>অথেনটিকেশন মূলত ইউজারকে ভেরিফাই (শনাক্ত) করে যে ব্যক্তিটি কে।</li>
                                <li>অথেনটিকেশন ইউজারের হতে  পাসওয়ার্ড, পিন, বায়োমেট্রিক্স এবং অন্যান্য তথ্য যা ইউজার প্রদান করে থাকে সেগুলার মাধ্যমে কাজ করে থাকে।</li>
                                <li>অথেনটিকেশন ইউজারের নিকট দৃশ্যমান এবং ইউজার চাইলে কিছুটা পরিবর্তনও করতে পারে।</li>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-3'>
                <p className='fw-bold'>প্রশ্নঃ কেন আপনি ফায়ারবেস ব্যবহার করেন? অথেনটিকেশন বাস্তবায়নের জন্য আপনার কাছে অন্য কোন অপশন আছে কি?</p>
                <p><span className='fw-bold'>উত্তরঃ</span> আমি ফায়ারবেস ব্যবহার করি কারণ এটি গুগলের একটি  শক্তিশালী সার্ভিস যা কমপোনেন্ট অথবা মডিউলগুলোকে রিভেন্টিনিং ছাড়াই দ্রুত এপ্লিকেশন তৈরি করতে সাহায্য করে। অ্যানালিটিক্স, অথেনটিকেশন, ডাটাবেস, কনফিগারেশন, ফাইল স্টোরেজ, পুশ মেসেজিংয়ের মতন সার্ভিসগুলো প্রভাইড করে যার ফলে আমার জন্য এটা সহজ হয় এবং আমি ইউজার এক্সপেরিয়েন্সের উপর ফোকাস করতে পারি।</p>
                <p>অথেনটিকেশন বাস্তবায়নের জন্য আরও উপায় আছে। যেমনঃ 1.web.config,
                    2. .Net core,
                    3. Swagger,
                    4. Node js,
                    5. Mvc etc.</p>

            </div>
            <div className='mt-5 mb-5'>
                <p className='fw-bold'>প্রশ্নঃ ফায়ারবেস অথেনটিকেশন বাদে আর কি কি সার্ভিস সরবাহ করে থাকে?</p>
                <p><span className='fw-bold'>উত্তরঃ</span> ফায়ারবেস অথেনটিকেশন বাদে যেসব সার্ভিস সরবাহ করে থাকে তা হলোঃ 1. Cloud Firestore, 
                    2.Cloud Functions,
                    3. Hosting,
                    4. Cloud Storage,
                    5. Google Analytics,
                    6. Predictions,
                    7. Cloud Messaging,
                    8. Dynamic Links,
                    9.Remote Config.</p>

            </div>
            <div className='d-flex align-items-center'>
                <div className='bg-dark w-50' style={{ height: '1px'}}></div>
                <p className='pt-3 px-3 fw-bold'>X</p>
                <div className='bg-dark w-50' style={{ height: '1px'}}></div>
            </div>
        </div>
    );
};

export default Blogs;