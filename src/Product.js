import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {

    const [state, dispatch]=useStateValue();
    const addToCart=()=>{
        // push the item into data layer
            dispatch({
                type:"ADD-TO-CART",
                item:{
                    id: props.id,
                    name: props.name,
                    img: props.img,
                    price: props.price,
                    rating:props.rating
                },
            });
    };
    
    return (
        <div className="product">
            <div className="product-info">
                <div className="product-name">
                    <strong>{props.name}</strong>
                </div>
                <p>
                    {props.desc}
                </p>
                <div className="product-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="product-rating">
                    {Array(props.rating).fill().map((_, i) => (
                        <span>⭐</span>
                    ))}
                </div>
            </div>
            <img className="product-image" src={props.img} alt=""/>
            <button className="button-primary" onClick={addToCart}>
                Add to cart
            </button>

        </div>
    )
}

export default Product
