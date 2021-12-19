import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Cart = () => {
    const { isLoading } = useAuth();
    return (

        <div>
            <h2>Cart</h2>
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