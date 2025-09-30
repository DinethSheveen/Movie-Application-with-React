import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import { LiaSearchengin } from "react-icons/lia";

function Movies() {
  const API_URL = "http://www.omdbapi.com/?apikey=7c669c55"
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async() => {
      const response = await axios.get(`${API_URL}&s=superman`)
      setMovies(response.data.Search);
    }
    fetchMovies()
  },[])  

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

            {/* MOVIES SECTION */}
            <div className="movies">
              {/* MOVIES GRID */}
              <div className="movies-grid">
                  {movies && movies.map((movie,index)=>{
                    return (
                      <div key={index} className="movie-card">
                        {movie.Poster&& <img src={movie.Poster} className='movie-poster'/>}
                        <div className='movie-title'>
                          <p>{movie.Title}</p>
                        </div>

                        <div className="hover-info">
                          <div className="year">
                            {movie.Year}
                          </div>

                          <div className="type">
                            {movie.Type}
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
        </section>
    </div>
  )
}

export default Movies