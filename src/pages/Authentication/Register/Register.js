import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import registrationImg from './login-plant.jpg'

const Register = () => {
    const [registerData, setRegisterData] = useState();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegistrationSubmit = e => {
        if (registerData.password !== registerData.password2) {
            // alert('Your password did not match. Please, Try again!');
            Swal.fire(
                'Oops!',
                'Your password did not match. Please, Try again!',
                'error'
            )
            return
        }
        registerUser(registerData.name, registerData.email, registerData.password, navigate)
        e.preventDefault();
    }

    const handleGoogleSignIn = (navigate) => {
        signInWithGoogle(navigate);
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="bg-color mx-auto my-5 border-radius">
                            <h4 className="pt-4">Create an Account</h4>
                            <p><small>use social account to create an account</small></p>
                            <div>
                                <button type="submit" onClick={handleGoogleSignIn} className="btn btn-google text-light me-2" style={{ backgroundColor: '#13b878' }}>Google login</button>
                            </div>
                            <form onSubmit={handleRegistrationSubmit} className="w-75 mx-auto mt-3">
                                <p><small>or use your email account</small></p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        onBlur={handleOnChange}
                                        className="form-control border-bottom border-0 bg-transparent"
                                        id="floatingInput"
                                        placeholder="Your name here"
                                        required />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
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
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnChange}
                                        className="form-control border-bottom border-0 bg-transparent"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        required />
                                    <label htmlFor="floatingPassword">Confirm Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary bg-color-sm px-5 text-light my-3">Register</button>
                                <p className="pb-4">Already have an account? <Link to="/login" className="text-decoration-none text-color fw-bold">Login</Link></p>
                                {
                                    isLoading && <div className="spinner-grow text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                }
                            </form>
                        </div>
                        {/* Successful Message */}
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
                        {/* Error Message */}
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
                    </div>
                    <div className="col-lg-6 ">
                        <img src={registrationImg} alt="" className="img-fluid" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;