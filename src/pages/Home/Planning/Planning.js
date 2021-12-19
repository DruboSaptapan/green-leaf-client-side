import React from 'react';
import { Link } from 'react-router-dom';
import './Planning.css'
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";

const Planning = () => {
    return (
        <div>
            <div className="container my-5 pt-5 pb-3">
                <h2 className='mb-4 fw-bolder'>Price planning</h2>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-2 mt-lg-0">
                        <div className="card pb-4 h-100" style={{ boxShadow: 'rgba(81, 81, 81, 0.14) 4px 4px 16px 4px' }}>
                            <div className="card-body p-0" style={{ position: 'relative' }}>
                                <h3 className="card-title fw-bold" style={{ color: '#fff', backgroundColor: '#faab34', paddingTop: '30px', paddingBottom: '80px' }}>Starter Pack</h3>
                                <h1 className="card-subtitle mb-2 py-2 px-4 text-muted" style={{ position: 'absolute', top: '115px', left: '65px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>$138<span style={{ fontSize: '22px' }}>Monthly</span></h1>
                                <div className="card border border-0 mt-5" style={{ marginBottom: '25px' }}>
                                    <ul className="list-group list-group-flush text-start">
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Planting</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Hedge trimming</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Jet washing</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Weeding & pruning</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Garden Clearance</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Tree Replacement </li>
                                    </ul>
                                </div>
                                <button className="btn" style={{ backgroundColor: '#1eb12f' }}>
                                    <Link to="./" className="card-link" style={{ color: '#fff', textDecoration: 'none' }}>Buy plan</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 mt-2 mt-lg-0">
                        <div className="card pb-4 h-100" style={{ boxShadow: 'rgba(81, 81, 81, 0.14) 4px 4px 16px 4px' }}>
                            <div className="card-body p-0" style={{ position: 'relative' }}>
                                <h3 className="card-title fw-bold" style={{ color: '#fff', backgroundColor: '#209f2e', paddingTop: '30px', paddingBottom: '80px' }}>Regular Pack</h3>
                                <h1 className="card-subtitle mb-2 py-2 px-4 text-muted" style={{ position: 'absolute', top: '115px', left: '65px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>$238<span style={{ fontSize: '22px' }}>Monthly</span></h1>
                                <div className="card border border-0 mt-5" style={{ marginBottom: '25px' }}>
                                    <ul className="list-group list-group-flush text-start">
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Planting & Trimming</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Jet Washing</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Tree Replacement</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Garden Clearance</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Landscape Designing</li>
                                        <li className="list-group-item border border-0"><ImCross className='text-danger me-2' />Tree Disease Diagnosis</li>
                                    </ul>
                                </div>
                                <button className="btn" style={{ backgroundColor: '#1eb12f' }}>
                                    <Link to="./" className="card-link" style={{ color: '#fff', textDecoration: 'none' }}>Buy plan</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 mt-2 mt-lg-0">
                        <div className="card pb-4 h-100" style={{ boxShadow: 'rgba(81, 81, 81, 0.14) 4px 4px 16px 4px' }}>
                            <div className="card-body p-0" style={{ position: 'relative' }}>
                                <h3 className="card-title fw-bolder" style={{ color: '#fff', backgroundColor: '#faab34', paddingTop: '30px', paddingBottom: '80px' }}>Advance Pack</h3>
                                <h1 className="card-subtitle mb-2 py-2 px-4 text-muted" style={{ position: 'absolute', top: '115px', left: '65px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>$450<span style={{ fontSize: '22px' }}>Monthly</span></h1>
                                <div className="card border border-0 mt-5" style={{ marginBottom: '25px' }}>
                                    <ul className="list-group list-group-flush text-start">
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Jet Washing</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Hedge Trimming</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Garden Clearance</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Tree Replacement</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Landscape Designing</li>
                                        <li className="list-group-item border border-0"><ImCheckmark className='text-success me-2' />Tree Disease Diagnosis</li>
                                    </ul>
                                </div>
                                <button className="btn" style={{ backgroundColor: '#1eb12f' }}>
                                    <Link to="./" className="card-link" style={{ color: '#fff', textDecoration: 'none' }}>Buy plan</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planning;