import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


export default function Subtotal() {
    const [{basket}, dispatch]=useStateValue();
    const itemNum = basket?.length;
    return (
        <div className="subtotal">
           
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal ({itemNum}items) : <strong>{value}</strong></p>
                    <small className="gift-section">
                        <input className="gift-checkbox" type="checkbox" />
                        <span>This order contains a gift.</span>
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className="checkout-button">
                Proceed to Checkout
            </button>
        </div>
        
    )
}
