import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user, isLoading } = useAuth();

    const email = user.email;

    useEffect(() => {
        axios.post("https://fierce-tor-64547.herokuapp.com/services/orders/email", { email: `${email}` })
            .then(res => setMyOrders(res.data));
    }, [email])

    // CANCEL ORDER
    const handleCancelOrder = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://fierce-tor-64547.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingOrder = myOrders.filter(order => order._id !== id);
                            setMyOrders(remainingOrder);
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Successfully your order has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            {
                isLoading &&
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <div className="container">
                <h2 className="mt-5 mb-3 text-center">My Orders</h2>
                {/* <h4>{user.displayName}</h4> */}
                <div className="table-responsive">
                    <table className="table border table-hover">
                        <thead style={{ backgroundColor: 'rgba(163, 217, 34, 0.55)' }}>
                            <tr>
                                <th className="text-start" scope="col">SL.</th>
                                <th className="text-start" scope="col">Name</th>
                                <th className="text-start" scope="col">Email</th>
                                <th className="text-start" scope="col">Name of Cycle</th>
                                <th className="text-start" scope="col">Address</th>
                                <th className="text-start" scope="col">Amount</th>
                                <th className="text-start" scope="col">Status</th>
                                <th className="text-start" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((MyOrder, index) =>
                                    <tr key={MyOrder._id}>
                                        <th className="text-start" scope="row">{index + 1}</th>
                                        <td className="text-start">{MyOrder?.name}</td>
                                        <td className="text-start">{MyOrder?.email}</td>
                                        <td className="text-start">{MyOrder?.productTitle}</td>
                                        <td className="text-start">{MyOrder?.address}</td>
                                        <td className="text-start">{MyOrder?.price}</td>
                                        <td className="text-start">
                                            <span className="badge bg-danger">Pending</span>
                                        </td>
                                        <td className="text-start">
                                            <button onClick={() => handleCancelOrder(MyOrder._id)} className="btn btn-sm btn-danger">Cancel</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;