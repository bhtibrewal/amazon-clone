import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Header.css';
import ShoppingCartIcon from './img/ShoppingCart';

const amazonLogo = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png';
function Header() {
    const [{ basket },] = useStateValue();
    return (
        <div className="header" >
            {/* logo */}
            <Link className="link" to="/">
                <img className="header-logo" alt="" src={amazonLogo} />
            </Link>

            {/* search bar */}
            <div className="header-search">
                <input className="search-bar" />
                <SearchLogo />
            </div>

            {/* nav options */}
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
                <Link className="link" to="/checkout">
                    <div className=" header-cart">
                        <ShoppingCartIcon className="cart-icon" />
                        <span className="cart-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
function SearchLogo() {
    return (
        <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true" data-testid="SearchIcon">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
    );
}

export default Header
