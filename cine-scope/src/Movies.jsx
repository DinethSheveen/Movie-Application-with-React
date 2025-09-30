import React from 'react'
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import { LiaSearchengin } from "react-icons/lia";

function Movies() {
  return (
    <div>
        {/* HERO SECTION */}
        <div className="hero">
            <img src={heroImg} alt="" />
        </div>

        {/* MAIN SECTION */}
        <section id="main">
            <div className="input-controls">
                <input type="text" placeholder='Search though 1000 of movies...'/>
                <button>Search <LiaSearchengin className='search-icon'/></button>
            </div>
        </section>
    </div>
  )
}

export default Movies