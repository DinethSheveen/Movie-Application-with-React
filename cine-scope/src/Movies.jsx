import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Movies.css"
import heroImg from "./assets/images/hero.webp"
import Movie from './assets/Components/Movie';
import { API_KEY } from '../config';
import Pagination from './assets/Components/Pagination';
import Search from './assets/Components/Search';

function Movies() {
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
  const [movies,setMovies] = useState([])
  const [movieTitle,setMovieTitle] = useState("")
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const [isLoading,setIsLoading] = useState(false)
  const [errorMsg,setErrorMsg] = useState("")
  
  const fetchMovies = async(page) => {
      setErrorMsg("")
      if(!movieTitle.trim()){
        return
      }
      else{
        try{
          setIsLoading(true)
          if(!API_KEY){
            setErrorMsg("Missing Your API KEY")
            return
          }
          const response = await axios.get(`${API_URL}&s=${movieTitle.trim()}&page=${page}`)

          if(response.data.Response === "True"){
            setMovies(response.data.Search);  
            setTotalPages(Math.ceil(Number(response.data.totalResults/10)))            
          }
          else{
            setMovies([]);
            setTotalPages(0)
            setErrorMsg("No Results. Please try another movie")  
          } 
        }
        catch(error){
          console.error("Error fecthing : ",error)
          setErrorMsg("Network Error. Please try again later")
        }
        finally{
          setIsLoading(false)
        }
      }
    }    

    // RENDERING THE MOVIES AND SETTING THE PAGE NUMBER = 1 
    const renderMovie = ()=>{ 
      setErrorMsg("")
      setPage(1)     
      fetchMovies(1)      
    } 

    // FETCHING THE MOVIES ONCE THE 'ENTER' KEY IS PRESSED 
    const handleKeyEvent = (event) => {
      if(movieTitle.trim()){
        if(event.key === "Enter"){
          renderMovie()
        } 
      } 
    }

    // FETCHING THE MOVIES ONCE THE PAGE NUMBER CHANGES 
    useEffect(()=>{
      if(movieTitle.trim()){
        fetchMovies(page)
      }
    },[page]) 

  return (
    <div className='main-body'>
        {/* HERO SECTION */}
        <div className="hero">
            <img src={heroImg} alt="" />
        </div>
        {/* MAIN SECTION */}
        <section id="main">
            {/* SEARCH COMPONENT */}
            <Search movieTitle={movieTitle} setMovieTitle={setMovieTitle} renderMovie={renderMovie} handleKeyEvent={handleKeyEvent}/>

            {/*  CONDITIONAL RENDERING THE LOADING STATE */}
            {isLoading && <h3 className='loading-state'>Loading Movies...</h3>}
            
            {errorMsg && <h3 className='error-msg'>{errorMsg}</h3>}

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
              {/* PAGINATION COMPONENT */}
              <Pagination isLoading={isLoading} movies={movies} page={page} setPage={setPage} totalPages={totalPages}/>
            </div>
        </section>
    </div>
  )
}

export default Movies