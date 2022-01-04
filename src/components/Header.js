import React from 'react'
import '../App.css'
import logo from '../image/logo.png'
const Header = () => {
    return (
        <>
        <section id="header">
            <a href="#"><img className='logo' src={logo} alt="logo" /></a>
            <div>
                <ul id="navbar">
                    <li><a className='active' href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/sbout">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="#"><i class='fa fa-shopping-bag'></i></a></li>
                </ul>
            </div>
        </section>
            
        </>
    )
}

export default Header
