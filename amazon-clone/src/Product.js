import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>⭐</p>
                </div>

                <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />

                <button>Add to Basket</button>
            </div>
        </div>
    
    )
}

export default Product
