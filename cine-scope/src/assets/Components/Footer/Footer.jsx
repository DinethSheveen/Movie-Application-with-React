import React from 'react'
import "./Footer.css"
import logo from "../../images/logo.webp"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        {/* LOGO */}
        <div className="footer-logo">
            <img src={logo} alt="" />
            <h1 className='app-name'>Cine-Scope</h1>
        </div>

        <hr />

        {/* MSG */}
        <p className="msg">
            Expore trending movies and shows
        </p>

        {/* FLEX-CONTAINER */}
        <div className="flex-container">
            <div className="flex-column">
                <a href="#">Home</a>
                <a href="#searchMovie">Search Movie</a>
            </div>

            <div className="flex-column">
                <a href="#trendingMovies">Trending Movies</a>
                <a href="">TV Series</a>
            </div>

            <div className="media">
                <p><FaFacebookF/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </div>
        </div>

        <hr />

        {/* BOTTOM */}
        <div className="copyright-section">
            <p>© 2025 Cine-Scope. All rights reserved.</p>
            <p>Bringing your favorite movies closer to you.</p>
        </div>
    </div>
  )
}

export default Footer