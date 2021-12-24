import React from 'react';
import bike from '@images/bike.jpg';
import addCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

const ProductItem = () => {
    return (
        <div className="ProductItem">
			<img src={bike}  alt="bike" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src={addCart} alt="add to cart" />
				</figure>
			</div>
		</div>
    );
};

export default ProductItem;