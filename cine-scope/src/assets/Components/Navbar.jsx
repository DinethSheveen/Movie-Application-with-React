import React from 'react'
import logo from "../images/logo.svg"
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
                <div className="genre-links">
                    <select>
                        <option value="">Select a genre</option>
                        <option value="Horror">Horror</option>
                        <option value="Action">Action</option>
                        <option value="Romance">Romance</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Sci-Fic">Sci-Fic</option>
                    </select>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar