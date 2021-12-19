import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Cart = () => {
    const { isLoading } = useAuth();
    return (

        <div className='mt-3 mb-5'>
            <h2>You have no orders</h2>
            {
                isLoading &&
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    );
};

export default Cart;