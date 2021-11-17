import React from 'react'
import './Home.css';
import Product from './Product';
import {getProduct} from "./productDetails"

export default function Home() {
    const productDetails=getProduct().productDetails;
    
    return (
        <div className="home">
            <div className="home--container">
                <img className="home-image" alt="" src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" />

                {/* product containers */}
                <div className="home-row">
                    <Product id={productDetails[0].id} name={productDetails[0].name} price={productDetails[0].price} img={productDetails[0].img} rating={productDetails[0].rating} />

                    <Product id={productDetails[1].id} name={productDetails[1].name} price={productDetails[1].price} img={productDetails[1].img} rating={productDetails[1].rating} />
                </div>
                <div className="home-row">
                    <Product />
                    <Product />
                </div>
                <div className="home-row">

                </div>
            </div>
        </div>
    )
}
