import React from 'react';
import bike from '@images/bike.jpg';
import addCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
    return (
        <>
            <img src={bike}  alt="bike" />
            <div className="ProductInfo">
                <p>$35</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button className="primary-button add-to-cart-button">
                    <img src={addCart} alt="add to cart" />
                    Add to cart
                </button>
            </div>


        </>
    );
};

export default ProductInfo;