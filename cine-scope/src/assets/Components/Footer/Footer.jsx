import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-header">
            <h1>Cine-Scope</h1>
        </div>
        <p className="msg">
            Explore your favourite movies and shows 
        </p>
        <div className="flex-container">
            <div className="column-one">
                <a href="">Home</a>
                <a href="#searchMovie">Search Movie</a>
            </div>
            <div className="column-two">
                <a href="">Contact</a>
                <a href="">Latest Shows</a>
            </div>
            <div className="column-three">
                <div className="facebook"><FaFacebookF/></div>
                <div className="twitter"><FaTwitter/></div>
                <div className="instagram"><FaInstagram/></div>
            </div>
        </div>
        <div className="flex-bottom">
            <p>&copy; 2025 Cine-Scope </p>
            <p>All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer