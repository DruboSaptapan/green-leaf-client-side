import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import img from './plant.jpg'

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-12 text-start">
                    <h1 className="fw-bold" style={{lineHeight: '45px'}}>A Beautiful <br />Garden Is A Work Of Heart</h1>
                    <p>A comparatively recent style of gardening, the wild garden was expounded by William Robinson in the last decade of the nineteenth century. The concept of a wild garden is not only against all formalism, but it also breaks rules of landscape styles.</p>
                    <Link to="/services" className="btn px-5 text-light" style={{backgroundColor: '#1eb12f'}}>Explore...</Link>
                </div>
                <div className="col-lg-6 col-12 mt-3 mt-lg-0">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;