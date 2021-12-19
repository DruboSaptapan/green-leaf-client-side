import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from './logo.png'
import './Navigation.css'
import userAvatar from './avatar.png'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width={'30px'} /> Green Leaf
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            {
                                user?.email &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/myorders">My orders</NavLink>
                                </li>
                            }
                            {
                                user?.email &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/addreview">Add review</NavLink>
                                </li>
                            }
                            {
                                user?.email &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cart">Cart</NavLink>
                                </li>
                            }

                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item me-3">
                                {
                                    ((user?.displayName) || (user?.photoURL) || (user?.email)) &&
                                    <span className="rounded-pill mx-lg-0 mx-auto py-1 px-2 d-flex align-items-center justify-content-center my-3 my-lg-0">
                                        {
                                            user.photoURL ?
                                                <img src={user.photoURL} className="rounded-pill user me-2" alt="" style={{ width: '35px' }} /> :
                                                <img src={userAvatar} className="rounded-pill user me-2" alt="" style={{ width: '35px' }} />
                                        }
                                        <p className="my-auto fw-bold">{(user?.displayName) || (user?.email)}</p>
                                    </span>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    user?.email ?
                                        <button className="btn btn-danger" onClick={logOut}>Log Out</button>
                                        :
                                        <NavLink to="/login">
                                            <button className="btn btn-success">Log in</button>
                                        </NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;