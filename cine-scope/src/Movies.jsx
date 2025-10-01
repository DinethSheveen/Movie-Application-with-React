import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import { LiaSearchengin } from "react-icons/lia";
import Movie from './assets/Components/Movie';
import { API_KEY } from '../config';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Movies() {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
  const [movies,setMovies] = useState([])
  const [movieTitle,setMovieTitle] = useState("")
  const [page,setPage] = useState(1)
  
  const fetchMovies = async(page) => {
      if(!movieTitle.trim()){
        return
      }
      else{
        const response = await axios.get(`${API_URL}&s=${movieTitle}&page=${page}`)
        setMovies(response.data.Search);   
        console.log(response.data);
      }
    }    

    const renderMovie = ()=>{ 
      setPage(1)     
      fetchMovies(1)      
    } 

    const handleKeyEvent = (event) => {
      event.key === "Enter" ? renderMovie() : ""
    }

  useEffect(()=>{
    if(movieTitle.trim()){
      fetchMovies(page)
    }
  },[page]) 

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
              {movies && movies.length > 0 ? 
                <div className='pages'>
                    <button className='page-number' style={page===1?{cursor:"not-allowed"}:{cursor:"pointer"}} onClick={()=>{
                      if(page>1){
                        setPage(prevPage => prevPage-1)
                      }
                    }}><FaArrowCircleLeft/> Prev Page</button>
                    
                    <div><h2>{page}</h2> </div>

                    <button className='page-number' onClick={()=>{
                      setPage((prevPage)=> prevPage+1)
                    }}>Next Page <FaArrowCircleRight/></button>
                </div>
                :
                ""
              }
            </div>
        </section>
    </div>
  )
}

export default Movies