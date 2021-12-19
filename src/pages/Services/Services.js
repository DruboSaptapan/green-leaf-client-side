import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import ShowMoreText from "react-show-more-text";
import { FaCartPlus } from "react-icons/fa";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch((e) => { })
    }, []);
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-start">
                <div className="d-flex justify-content-center spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container my-5">
                <h2 className="mb-3 fw-bolder">Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service =>
                            <div className="col-lg-4 col-12" key={service._id}>
                                <div className="card d-flex flex-column align-items-center bg-light text-start" style={{ boxShadow: 'rgba(81, 81, 81, 0.14) 4px 4px 16px 4px' }}>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <img src={service.serviceImage} alt="service-icon" className='img-fluid' style={{ borderRadius: '12px' }} />
                                            </div>
                                            <div className="col-9">
                                                <h5 className="card-title mb-0 text-start fw-lighter" style={{ lineHeight: '32px', fontWeight: 600 }}>{service.serviceTitle}</h5>
                                            </div>

                                        </div>
                                        <div className="fw-light">
                                            {/* <p className="text-start" style={{ fontSize: '16px' }}>{service.description}</p> */}
                                            <ShowMoreText
                                                lines={3}
                                                more='Read more'
                                                less='Show less'
                                                anchorClass=''
                                                expanded={false}
                                                className='my-3'
                                                style={{ color: 'green', textDecoration: 'none' }}
                                            >
                                                <p>{service.description}</p>
                                            </ShowMoreText>
                                            <button className="btn btn-success btn-sm"><FaCartPlus /> Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            {/* <h2>This is services</h2> */}
        </div>
    );
};

export default Services;