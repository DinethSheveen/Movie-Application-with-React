import React from 'react'
import logo from "../../images/logo.webp"
import "./Navbar.css"
import { LiaSearchengin } from "react-icons/lia";

function Navbar() {
  return (
    <div>
        {/* NAVBAR */}
        <nav>
            {/* FLEX-CONTAINER */}
            <div className="flex-nav">
                {/* LOGO */}
                <div className="logo">
                    <img src={logo} alt="logo" className='logo'/>
                </div>

                {/* APP NAME */}
                <div className="nav-header">
                    <h2><a href="">Cine-Scope</a></h2>
                </div>

                {/* GENRE SELECTION*/}
                <div className="menu-links">
                    <a href="#searchMovie">Search</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar