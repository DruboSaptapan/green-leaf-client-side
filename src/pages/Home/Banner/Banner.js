import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className='banner-box'>
                    <h2 className="fw-bold text-light" style={{ lineHeight: '45px' }}>A Beautiful <br />Garden Is A Work Of Heart</h2>
                    <p className='text-light'>A comparatively recent style of gardening, the wild garden was expounded by William Robinson in the decade of the nineteenth century.</p>
                    <Link to="/services" className="btn px-5 text-light" style={{ backgroundColor: '#1eb12f' }}>Explore...</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;