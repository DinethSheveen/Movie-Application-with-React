import React from 'react'
import logo from "../../images/logo.svg"
import "./Navbar.css"

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
                    <h2>Cine-Scope</h2>
                </div>

                {/* GENRE SELECTION*/}
                <div className="menu-links">
                    <div>Movies</div>
                    <div>Tv Series</div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar