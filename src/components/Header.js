import React from 'react'
import '../App.css'
import logo from '../image/logo.png'
const Header = () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active')
        })
    }
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    }
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
                        <a href="#" id='close'><i className='fa fa-times'></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    {/* <a href="#"><i class='fa fa-shopping-bag'></i></a> */}
                    <i id='bar' className='fa fa-outdent'></i>
                </div>
            </section>

        </>
    )
}

export default Header
