import React from 'react';
import bike from '@images/bike.jpg';
import '@styles/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
			<figure>
			<img src={bike}  alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
		</div>
    );
};

export default ShoppingCartItem;