// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// // import useAuth from '../../Hooks/useAuth';

// const Service = () => {
//     const { serviceId } = useParams();
//     const [service, setService] = useState({});
//     const { register, handleSubmit, reset } = useForm();
//     // const { user } = useAuth();

//     useEffect(() => {
//         fetch(`http://localhost:7000/services/${serviceId}`)
//             .then(res => res.json())
//             .then(data => setService(data))
//             .catch((e) => { })
//     }, [serviceId])

//     const onSubmit = data => {
//         fetch('http://localhost:7000/orders', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.insertedId) {
//                     Swal.fire(
//                         'Good job!',
//                         'Successfully order proceed!',
//                         'success'
//                     )
//                     reset();
//                 }
//             })
//     };

//     return (
//         <div>
//             <div className="container mt-4">
//                 <div className="card mb-3" style={{ maxWidth: '540px' }}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img src="..." className="img-fluid rounded-start" alt="..." />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body text-start">
//                                 <h5 className="card-title">{service.serviceTitle}</h5>
//                                 <p className="card-text">{service.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Service;