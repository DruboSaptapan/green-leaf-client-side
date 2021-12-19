import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import ShowMoreText from "react-show-more-text";
import { FaCartPlus } from "react-icons/fa";

const Services = () => {
    const { isLoading } = useAuth();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fierce-tor-64547.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch((e) => { })
    }, []);
    return (
        <div>
            <div className="container my-5">
                {
                    isLoading &&
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <h2 className="mb-5 fw-bolder">Our wonderful services</h2>
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
                                                <h4 className="card-title mb-0 text-start" style={{ lineHeight: '32px', fontWeight: 500, }}>{service.serviceTitle}</h4>
                                            </div>

                                        </div>
                                        <div className="fw-light">
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
                                            <button className="btn btn-sm text-light" style={{backgroundColor: '#1eb12f'}}><FaCartPlus /> Add to cart</button>
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