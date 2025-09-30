import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import { LiaSearchengin } from "react-icons/lia";
import noPosterImg from "./assets/images/noPoster.jpg"

function Movies() {
  const API_URL = "http://www.omdbapi.com/?apikey=7c669c55"
  const [movies,setMovies] = useState([])
  const [movieTitle,setMovieTitle] = useState("")

  const fetchMovies = async() => {
      const response = await axios.get(`${API_URL}&s=${movieTitle}`)
      setMovies(response.data.Search);
    }

    const renderMovie = ()=>{
      fetchMovies()
    } 

    const handleKeyEvent = (event) => {
      event.key === "Enter"? renderMovie() : ""
    }

  useEffect(()=>{

  },[movieTitle]) 

  return (
    <div>
        {/* HERO SECTION */}
        <div className="hero">
            <img src={heroImg} alt="" />
        </div>

        {/* MAIN SECTION */}
        <section id="main">
            <div className="input-controls">
                <input type="text" value={movieTitle}         placeholder='Search though 1000 of movies...' onChange={(event)=>{setMovieTitle(event.target.value)}} 
                onKeyDown={handleKeyEvent(event)}
                  />
                <button onClick={renderMovie}>Search <LiaSearchengin className='search-icon'/></button>
            </div>

            {/* MOVIES SECTION */}
            <div className="movies">
              {/* MOVIES GRID */}
              <div className="movies-grid">
                  {movies && movies.map((movie,index)=>{
                    return (
                      <div key={index} className="movie-card">
                        {movie.Poster != "N/A"? <img src={movie.Poster} className='movie-poster'/>:<img src={noPosterImg}/>}
                        <div className='movie-title'>
                          {movie.Poster === "N/A"? <p style={{color:"goldenrod"}}>{movie.Title}</p> : <p>{movie.Title}</p>}
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