import React from 'react'
import './Basket.css'

//2:48:29
export default function BasketItem(props) {
    const removeFromCart=()=>{

    };
    return (
        <div className="basket-item">
             <div className="cartproduct-info">
                <div className="cartproduct-name">
                    <strong>{props.name}</strong>
                </div>
                <p>
                    {props.desc}
                </p>
                <div className="cartproduct-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="cartproduct-rating">
                    {Array(props.rating).fill().map((_, i) => (
                        <span>⭐</span>
                    ))}
                </div>
            </div>
            <img className="cartproduct-image" src={props.img} alt=""/>
            <button className="remove-button" onClick={removeFromCart}>
                Add to cart
            </button>
        </div>
    )
}
