import React, {useState} from 'react';
import bike from '@images/bike.jpg';
import addToCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

const ProductItem = () => {
	const [cart, setCart] = useState([]); // va a desencadenar el llamado al elemento
	const handleClick = () => {
		setCart([]);
	}
    return (
        <div className="ProductItem">
			<img src={bike}  alt="bike" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="add to cart" />
				</figure>
			</div>
		</div>
    );
};

export default ProductItem;