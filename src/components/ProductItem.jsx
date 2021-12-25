import React, {useContext} from 'react';
import addCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext'
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext); // va a desencadenar el llamado al elemento
	const handleClick = item => {
		addToCart(item);
	}
    return (
        <div className="ProductItem">
			<img src={product.images[0]}  alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addCart} alt="add to cart" />
				</figure>
			</div>
		</div>
    );
};

export default ProductItem;