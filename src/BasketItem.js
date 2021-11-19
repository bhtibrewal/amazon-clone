import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';

//2:48:29
export default function BasketItem(props) {
    const [state, dispatch]=useStateValue();
    const removeFromCart = () => {
        dispatch({
                type: "REMOVE_FROM_CART",
                id: props.id
        })
    };
    return (
        <div className="basket-item">
            <img className="cartproduct-image" src={props.img} alt="" />
            <div className="cartproduct-info">
                <div className="cartproduct-name">
                    <strong>{props.name}</strong>
                </div>

                <div className="cartproduct-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="cartproduct-rating">
                    {Array(props.rating).fill().map(() => (
                        <span>⭐</span>
                    ))}
                </div>
                <button className="remove-button" onClick={removeFromCart}>
                    Remove from cart
                </button>
            </div>


        </div>
    )
}
