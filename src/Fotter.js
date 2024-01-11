import React from 'react'
import './Fotter.css';

export default function Fotter() {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h3 className='f-titles'>Information</h3>
                        <ul>
                            <li><a href='#'>About Us</a></li>    
                            <li><a href='#'>Contact Us</a></li>    
                            <li><a href='#'>News</a></li>    
                            <li><a href='#'>Store</a></li>    
                        </ul>
                    </div>
                    <div className='col-md-3'>
                    <h3 className='f-titles'>Collections</h3>
                        <ul>
                            <li><a href='#'>Wooden Chair</a></li>    
                            <li><a href='#'>Royal Cloth Sofa</a></li>    
                            <li><a href='#'>Accent Chair</a></li>    
                            <li><a href='#'>Bed</a></li>    
                            <li><a href='#'>Hanging Lamp</a></li>    
                        </ul>
                    </div>
                    <div className='col-md-3'>
                    <h3 className='f-titles'>My Accounts</h3>
                        <ul>
                            <li><a href='#'>My Account</a></li>    
                            <li><a href='#'>Wishlist</a></li>    
                            <li><a href='#'>Community</a></li>    
                            <li><a href='#'>Order History</a></li>    
                            <li><a href='#'>My Cart</a></li>    
                        </ul>
                    </div>
                    <div className='col-md-3'>
                    <h3 className='f-titles'>My Accounts</h3>
                    <ul>
                            <li><a href='#'>Subscribe to get latest news,update and information.</a></li>
                            <li><input placeholder='  Enter Email Here...'></input></li>
                    </ul>
                    </div>
                </div>
                <div className='fotter-end'>
                    <div className='dflex'>
                        <a href='#'><i class="fa-brands fa-facebook"></i></a>
                        <a href='#'><i class="fa-brands fa-instagram"></i></a>
                        <a href='#'><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href='#'><i class="fa-brands fa-pinterest"></i></a>
                        <a href='#'><i class="fa-brands fa-behance"></i></a>
                    </div>
                    <p>
						©copyright. designed and developed by <a href="#">themesine</a>
					</p>
                </div>
            </div>
        </div>
    </>
  )
}
