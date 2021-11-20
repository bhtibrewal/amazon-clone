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
                   {props.name}
                </div>
                
                <div className="price product-price">
                    <small>₹</small>
                    <span>{props.price}</span>
                </div>
                <div className="product-rating">
                    {Array(props.rating).fill().map(() => (
                        <span>⭐</span>
                    ))}
                </div>
            </div>
            <img className="product-image" src={props.img} alt=""/>
            <button className="button add-button" onClick={addToCart}>
                Add to cart
            </button>

        </div>
    )
}

export default Product
