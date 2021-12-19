import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../Hooks/useAuth'
import loginImg from './login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    // const submitIcon = <FontAwesomeIcon icon={faCheckCircle} />

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <div>
            <div className="container">
                {
                    isLoading &&
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={loginImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <div className="mx-auto my-5 border-radius custom-shadow">
                            <h4 className="pt-4">Please Login</h4>
                            <p><small>use social account</small></p>
                            <div>
                                <button type="submit" onClick={handleGoogleSignIn} className="btn text-light me-2" style={{ backgroundColor: '#1eb12f' }}>Google login</button>
                            </div>

                            <form onSubmit={handleLoginSubmit} className="w-75 mx-auto mt-3">
                                <p><small>or use your email account</small></p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        onBlur={handleOnChange}
                                        className="form-control border-bottom border-0 bg-transparent" id="floatingInput" placeholder="name@example.com"
                                        required />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleOnChange}
                                        className="form-control border-bottom border-0 bg-transparent"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        required />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                {/* success message */}
                                {
                                    ((user?.displayName) || (user?.photoURL) || (user?.email)) &&
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover >
                                    </ToastContainer >

                                }
                                {/* error message */}
                                {
                                    authError &&
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover >
                                    </ToastContainer >
                                }
                                <button type="submit" className="btn bg-color-sm px-5 text-light my-3" style={{backgroundColor: '#1eb12f'}}><span className="ms-2">Login</span></button>
                            </form>
                            <p className="pb-4">New user? <Link to="/register" className="text-decoration-none fw-bold" style={{ color: '#9282f2' }}>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;