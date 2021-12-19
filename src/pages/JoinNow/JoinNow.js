import React from 'react';
import './JoinNow.css'

const JoinNow = () => {
    return (
        <div className='container mt-5'>
            <div className="newsletter-box bg-green ptb-100">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="content-title style1 text-center mb-25">
                                <h2 className="text-white">Subscribe Now</h2>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit placeat amet.</p>
                            </div>
                            <form className="newsletter-form text-start">
                                <input type="email" className='w-100' placeholder="Enter Your Email Address" />
                                <button>Subscribe Now </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinNow;