import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import { LiaSearchengin } from "react-icons/lia";
import Movie from './assets/Components/Movie';
import { API_KEY } from '../config';

function Movies() {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
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
      event.key === "Enter" ? renderMovie() : ""
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
            <div id="searchMovie" className="input-controls">
                <input type="text" value={movieTitle}         placeholder='Search though 1000 of movies...' onChange={(event)=>{setMovieTitle(event.target.value)}} 
                onKeyDown={(event)=>{handleKeyEvent(event)}}
                  />
                <button onClick={renderMovie}>Search <LiaSearchengin className='search-icon'/></button>
            </div>

            {/* MOVIES SECTION */}
            <div className="movies">
              {/* MOVIES GRID */}
              <div className="movies-grid">
                  {movies && movies.map((movie,index)=>{
                    return (
                      <Movie movie={movie} key={index}/>
                    )
                  })}
              </div>
            </div>
        </section>
    </div>
  )
}

export default Movies