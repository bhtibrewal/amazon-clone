 import React from 'react'
 import './Header.css';
 
 function Header() {
     return (
         <div className="header" >
            <img className="header-logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            <div className="header-search">
                <input className="search-bar"/>
            </div>
            <div className="header-nav">
                <div className="header-options">
                   <div className="line1">
                        Hello, 
                    </div>
                   <div className="line2">
                       Sign in
                    </div>
                </div>
                <div className="header-options">
                <span className="line1">
                        Returns
                    </span>
                   <span className="line2">
                       & Orders
                    </span>
                </div>
                <div className="header-options">
                <span className="line1">
                        Your 
                    </span>
                   <span className="line2">
                       Prime
                    </span>
                </div>
                <div className="header-cart">
                  <img src="./cart.svg"/> 0
                </div>
            </div>
            
         </div>
     )
 }
 
 export default Header
 