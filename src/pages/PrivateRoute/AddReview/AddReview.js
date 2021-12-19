import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.photoUrl = `${user.photoURL}`
        data.email = `${user.email}`
        axios.post('http://localhost:7000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Successfully review added!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="container mt-5">
                <h2>Add review</h2>
                <form className="px-4 pb-5 mx-auto" style={{}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="user name" defaultValue={user.displayName} {...register("name", { required: true })} />
                        <label htmlFor="floatingInput">User Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" {...register("rating", { required: true })} placeholder="rate here" required></input>
                        <label htmlFor="floatingInput">Rate here</label>
                        {/* <Rating
                            {...register("rating", { required: true })}
                            start={0.1}
                            stop={5}
                            // onChange={(rate) => alert(rate)}
                            emptySymbol="far fa-star fa-2x" fullSymbol="fas fa-star fa-2x"
                            fractions={2}
                            style={{color: '#ffd403'}}
                        /> */}
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" {...register("comment", { required: true })} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn btn-primary text-light w-100 text-center" value="Review" />
                    </span>
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
                </form>
            </div>
        </div>
    );
};

export default AddReview;


// import React from 'react';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
// import './AddRating.css';
// import useAuth from '../../hooks/useAuth';
// const AddRating = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const { user } = useAuth();
//     const onSubmit = data => {
//         data.photoUrl = `${user.photoURL}`
//         axios.post('https://rocky-harbor-58240.herokuapp.com/rating', data)
//             .then(res => {
//                 if (res.data.insertedId) {
//                     alert('added successfully');

//                     reset();
//                 }
//             })
//     };
//     return (
//         <div className="addservice">
//             <h2>Add Services</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("name")} placeholder="name" required />
//                 <textarea {...register("description")} placeholder="Description" required />
//                 <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="please Rating 1-5" required />

//                 <input type="submit" />
//             </form>
//         </div >
//     );
// };

// export default AddRating;