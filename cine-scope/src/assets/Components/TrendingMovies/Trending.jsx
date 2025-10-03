import React, { useEffect, useState } from "react";
import "./Trending.css";
import { TMDB_API_KEY } from "../../../../config";
import axios from "axios";
import noPoster from "../../images/noPoster.jpg"

function Trending() {
    const API_URL = "https://api.themoviedb.org/3/discover/movie?";

    //STATES
    const [movies,setMovies] = useState([])


    const fetchMovies = async () => {
        try{
            const response = await axios.get(`${API_URL}api_key=${TMDB_API_KEY}&sort_by=popularity.desc`)
            setMovies(response.data.results);
            console.log(response.data.results);
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    },[]);

  return (
    <>
      <div id="trendingMovies" className="trending-section">
        <div className="trending-header">
          <h2>Recent Releases</h2>
        </div>

        <div className="movies-section">
            <div className="movies-grid">
                {movies.map((movie)=>{
                    return(
                        <div className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" onError={(event)=>{
                                event.currentTarget.src = noPoster
                            }}/>
                            <div className="movie-name">
                                {movie.title}
                        </div>
                        <div className="hover-details">
                            <div className="year">{movie.release_date}</div>
                            <div className="overview">
                                {movie.overview? movie.overview : "No Overview"}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
