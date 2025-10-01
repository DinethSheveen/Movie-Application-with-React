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
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
  const [movies,setMovies] = useState([])
  const [movieTitle,setMovieTitle] = useState("")
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const [isLoading,setIsLoading] = useState(false)
  const [errorMsg,setErrorMsg] = useState(false)
  
  const fetchMovies = async(page) => {
      if(!movieTitle.trim()){
        return
      }
      else{
        setIsLoading(true)
        try{
          const response = await axios.get(`${API_URL}&s=${movieTitle}&page=${page}`)

          if(response.data.Response === "True"){
            setMovies(response.data.Search);  
            setTotalPages(Math.ceil(Number(response.data.totalResults/10)))
          }
          else{
            setMovies([]);
            setTotalPages(0)
            setErrorMsg(true)  
          } 
        }
        catch(error){
          console.error("Error fecthing : ",error)
        }
        finally{
          setIsLoading(false)
        }
      }
    }    

    // RENDERING THE MOVIES AND SETTING THE PAGE NUMBER = 1 
    const renderMovie = ()=>{ 
      setPage(1)     
      fetchMovies(1)      
    } 

    // FETCHING THE MOVIES ONCE THE 'ENTER' KEY IS PRESSED 
    const handleKeyEvent = (event) => {
      setErrorMsg(false)
      if(event.key === "Enter"){
        renderMovie()
      }  
    }

    // FETCHING THE MOVIES ONCE THE PAGE NUMBER CHANGES 
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

            {/*  CONDITIONAL RENDERING THE LOADING STATE */}
            {isLoading? <h3 className='loading-state'>Loading Movies...</h3>:""}
            
            {errorMsg? <h3 className='error-msg'>Something went wrong. Please try another movie</h3> : ""}

            {/* MOVIES SECTION */}
            <div className="movies">
              {/* MOVIES GRID */}
              <div className="movies-grid">
                  {/* CONDITIONAL RENDERING MOVIES */}
                  {!isLoading && movies && movies.map((movie)=>{
                    return (
                      <Movie movie={movie} key={movie.imdbID}/>
                    )
                  })}
              </div>
              {/* CONDITIONAL RENDERING MOVIE PAGES */}
              {!isLoading && movies && movies.length > 0 ? 
                <div className='pages'>
                    <button className='page-control-btn' style={page===1?{cursor:"not-allowed"}:{cursor:"pointer"}} onClick={()=>{
                      if(page>1){
                        setPage(prevPage => prevPage-1)
                      }
                    }}><FaArrowCircleLeft/> Prev Page</button>
                    
                    <div className='page-number'><h2>{page} off {totalPages}</h2> </div>

                    <button className='page-control-btn' style={page===totalPages?{cursor:"not-allowed"}:{cursor:"pointer"}} onClick={()=>{
                      if(page<totalPages){
                        setPage((prevPage)=> prevPage+1)
                      }
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