import React from 'react';
import arrow from '@icons/flechita.svg';
import '@styles/Order.scss';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>04.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

export default Order;