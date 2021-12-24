import React from 'react';
import bike from '@images/bike.jpg';
import iclose from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src={bike}  alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30.0</p>
            <img src={iclose} alt="close" />
        </div>
    );
};

export default OrderItem;