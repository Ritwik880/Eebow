import React from 'react'
import category1 from '../image/category1.jpg'
import category2 from '../image/category2.jpg'
import category3 from '../image/category3.jpg'
import product1 from '../image/product1.jpeg'
import product2 from '../image/product2.jpeg'
import product3 from '../image/product3.jpeg'
import product4 from '../image/product4.jpeg'
import product5 from '../image/product5.jpeg'
import product6 from '../image/product6.jpeg'
import product7 from '../image/product7.jpeg'
import product8 from '../image/product8.jpeg'
import product9 from '../image/product9.jpeg'
import product10 from '../image/product10.jpeg'
import product11 from '../image/product11.jpeg'
import product12 from '../image/product12.jpeg'
import '../App.css'
const Home = () => {
    return (
        <>
            <section id="hero">
                <h4 className='h4'>Shop-in-offer</h4>
                <h2>Great Deals</h2>
                <h1>On all products</h1>
                <p className='p'>Save more with coupons & up to 70% off!</p>
                <button>Shop Now</button>

            </section>


            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col">
                            <img src={product1} alt='img' />
                        </div>
                        <div class="col">
                            <img src={product2} alt='img' />
                        </div>
                        <div class="col">
                            <img src={product3} alt='img' />
                        </div>
                    </div>
                </div>

            </div>

            <div class="small-container">
                <h2 class="title">Feature Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src={product1} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product2} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product3} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product4} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                </div>
                <h2 class="title">Latest Product</h2>
                <div class="row">
                    <div class="col-4">
                        <img src={product5} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product6} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product7} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product8} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <img src={product9} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product10} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product11} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                    <div class="col-4">
                        <img src={product12} />
                        <h4>Red Printed T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>RS. 5000.00</p>
                    </div>
                </div>
            </div>

            <section id="newsletter" className='section-p1 section-m1'>
                <div className="newstext">
                    <h4>Sign Up for Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder='Your email address' />
                    <button>Sign Up</button>
                </div>
            </section>


        </>
    )
}

export default Home
