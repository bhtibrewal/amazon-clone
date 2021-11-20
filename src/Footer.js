import React from 'react'
import linkedin from './img/linkedin.svg'
import github from './img/Octicons-mark-github.svg'
import twitter from './img/twitter.svg'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-section">
                <div>Created By:
                    <span className="my-name">  Bhavika Tibrewal</span>
                </div>
                <div className="social-links">

                    <a href="https://github.com/bhtibrewal">
                        <img class="footer-icons" src={github} />
                    </a>
                    <a href="//">
                        <img class="footer-icons" src={twitter} />
                    </a>
                    <a href="//">
                        <img class="footer-icons" src={linkedin} />
                    </a>
                </div>
            </div>
            <div className="lower-section-one">
                <div className="column">
                    <h3 className="heading">Get to Know Us</h3>
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Press Releases</div>
                    <div>Amazon Cares</div>
                    <div>Gift a Smile</div>
                </div>
                <div className="column">
                    <h3 className="heading">Connect with Us</h3>
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                </div>
                <div className="column">
                    <h3 className="heading">Make Money with Us</h3>
                    <div>Sell on Amazon</div>
                    <div>Sell under Amazon Accelerator</div>
                    <div>Amazon Global Selling</div>
                    <div>Become an Affiliate</div>
                    <div>Fulfilment by Amazon</div>
                    <div>Advertise Your Products</div>
                    <div>Amazon Pay on Merchants</div>
                </div>
                <div className="column">
                    <h3 className="heading">Let Us Help You</h3>
                    <div>COVID-19 and Amazon</div>
                    <div>Your Account</div>
                    <div>Returns Centre</div>
                    <div>100% Purchase Protection</div>
                    <div>Amazon App Download</div>
                    <div>Amazon Assistant Download</div>
                    <div>Help</div>
                </div>
            </div>
            <div className="lower-section-two">
                <div className="column">
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Press Releases</div>
                    <div>Amazon Cares</div>
                    <div>Gift a Smile</div>
                </div>
                <div className="column">
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                </div>
            </div>
        </div>
    )
}
