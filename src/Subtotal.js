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
                <div classname="subtotal-section">
                    <p className="subtotal-line">Subtotal ({itemNum} items) : <strong> {value}</strong></p>
                    <div className="gift-section">
                        <input className="gift-checkbox" type="checkbox" />
                        <span>This order contains a gift.</span>
                    </div>
                </div>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing= '2s' 
                prefix={'₹ '}
            />
            <button className="button checkout-button" disable={itemNum===0}>
                Proceed to Checkout
            </button>
        </div>
        
    )
}
