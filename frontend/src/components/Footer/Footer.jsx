import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.Preview3} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi impedit adipisci sunt temporibus accusamus cum! Dolorum laborum nobis voluptates maxime illum quo consequuntur, eveniet corporis mollitia dolores consectetur sed?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-896-456-465</li>
                    <li>contact@foodstack.com</li>
                </ul>

            </div>
            
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 @ foodstack.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
