import React from 'react'
import './Home.css';
import Product from './Product';
import { getProduct } from "./productDetails"

export default function Home() {
    document.title = "Amazon";
    const productDetails = getProduct().productDetails;

    return (
        <div className="home">
            <div className="home--container">
                <img className="home-image" alt="" src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" />

                {/* product containers */}
                <div className="home-row">
                    <Product 
                    id={productDetails[0].id} 
                    name={productDetails[0].name} 
                    price={productDetails[0].price} 
                    img={productDetails[0].img} 
                    rating={productDetails[0].rating} />

                    <Product 
                    id={productDetails[1].id} 
                    name={productDetails[1].name} 
                    price={productDetails[1].price} 
                    img={productDetails[1].img} 
                    rating={productDetails[1].rating} />

                </div>
                <div className="home-row">
                    <Product 
                    id={productDetails[2].id} 
                    name={productDetails[2].name} 
                    price={productDetails[2].price} 
                    img={productDetails[2].img} 
                    rating={productDetails[2].rating} />

                    <Product 
                    id={productDetails[3].id} 
                    name={productDetails[3].name} 
                    price={productDetails[3].price} 
                    img={productDetails[3].img} 
                    rating={productDetails[3].rating} />
                </div>
                <div className="home-row">
                
                </div>
            </div>
        </div>
    )
}
