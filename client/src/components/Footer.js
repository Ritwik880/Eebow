import React from 'react'
import app from '../image/app.jpg'
import pay from '../image/pay.png'
import play from '../image/play.jpg'
import logo from '../image/logo.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="col">
                    <a href="#"><img className='logo' src={logo} alt="" /></a>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong>  Greater Noida, Uttar Pradesh 201310</p>
                    <p><strong>Phone:</strong> +01 2222 365</p>
                    <p><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className='fa fa-facebook'></i>
                            <i className='fa fa-twitter'></i>
                            <i className='fa fa-instagram'></i>
                            <i className='fa fa-youtube'></i>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                {/* <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store on Google Play</p>
                    <div className="row">
                        <img src={app} alt="footerImage" />
                        <img src={play} alt="footerImage" />
                    </div>
                    <p>Secure Payment Gateways</p>
                    <img src={pay} alt="footerImage" />
                </div> */}
                
                <div className="copyright">
                    <p>Copyright © 2021 Eebow. All Rights Reserved</p>
                </div>

            </footer>


        </>
    )
}

export default Footer
