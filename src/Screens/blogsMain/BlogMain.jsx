import React from 'react'
import './blogMain.css'
import { Link } from 'react-router-dom'
export default function BlogMain() {
    return (
        <div className='BlogMain'>
            <h1>Blogs</h1>
            <div className="blog-section">
                <img src='images/blog1.png' alt='' />
                <div className="blog-content">
                    <p>To absolve you from this problem Kalpataru offers you Internet Share Trading through which you can trade and transact on your P.C. (Personal Computer) from anywhere like Office, Car Bus, Train, Plane or even from your living room. Not only this you can also trade in share Commodity Derivative, Currency Derivative. You can avail so many services and conveniences offered by Kalpataru.</p>
                    <Link to='/blog'>Read More</Link>
                </div>
            </div>
            <div className="blog-section">
                <img src='images/blog2.png' alt='' />
                <div className="blog-content">
                    <p>To absolve you from this problem Kalpataru offers you Internet Share Trading through which you can trade and transact on your P.C. (Personal Computer) from anywhere like Office, Car Bus, Train, Plane or even from your living room. Not only this you can also trade in share Commodity Derivative, Currency Derivative. You can avail so many services and conveniences offered by Kalpataru.</p>
                    <Link to='/blog'>Read More</Link>
                </div>
            </div>
            <div className="blog-section">
                <img src='images/blog3.png' alt='' />
                <div className="blog-content">
                    <p>To absolve you from this problem Kalpataru offers you Internet Share Trading through which you can trade and transact on your P.C. (Personal Computer) from anywhere like Office, Car Bus, Train, Plane or even from your living room. Not only this you can also trade in share Commodity Derivative, Currency Derivative. You can avail so many services and conveniences offered by Kalpataru.</p>
                    <Link to='/blog'>Read More</Link>
                </div>
            </div>
            <div className="blog-section">
                <img src='images/blog4.png' alt='' />
                <div className="blog-content">
                    <p>To absolve you from this problem Kalpataru offers you Internet Share Trading through which you can trade and transact on your P.C. (Personal Computer) from anywhere like Office, Car Bus, Train, Plane or even from your living room. Not only this you can also trade in share Commodity Derivative, Currency Derivative. You can avail so many services and conveniences offered by Kalpataru.</p>
                    <Link to='/blog'>Read More</Link>
                </div>
            </div>
            <div className="section-2">
                <h1>Categories</h1>
                <div className="blog-main">
                <div className="section-2-content">
                    <img src='/images/category1.png' alt='' />
                    <h2>News</h2>
                </div>
                <div className="section-2-content">
                    <img src='/images/category2.png' alt='' />
                    <h2>Stock</h2>
                </div>
                <div className="section-2-content">
                    <img src='/images/category3.png' alt='' />
                    <h2>Trading</h2>
                </div>
                <div className="section-2-content">
                    <img src='/images/category4.png' alt='' />
                    <h2>IPO</h2>
                </div>
                <div className="section-2-content">
                    <img src='/images/category5.png' alt='' />
                    <h2>Broker</h2>
                </div>
                <div className="section-2-content">
                    <img src='/images/category6.png' alt='' />
                    <h2>Online trading</h2>
                </div>
                </div>
            </div>
        </div>
    )
}
