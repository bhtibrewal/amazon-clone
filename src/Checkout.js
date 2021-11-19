import React from 'react';
import BasketItem from './BasketItem';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


const adLink="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg";
export default function Checkout() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="left-column">
                <img className="checkout-ad" src={adLink} alt=""/>
                <small className="sponsored">sponsored</small>
                <h1 className="basket-title">Your Shopping Basket</h1>
                {basket.map(item =>(
                <BasketItem className="shopping-basket-items"
                id={item.id} 
                name={item.name}
                rating={item.rating}
                price={item.price}
                img={item.img}
                />
                ))}
            </div>
            <div className="right-column">
               <Subtotal/>
            </div>
        </div>
    )
}
