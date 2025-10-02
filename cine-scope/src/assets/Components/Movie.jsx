import React from "react";
import noPosterImg from "../images/noPoster.jpg"

function Movie({movie}) {
  return (
    <div className="movie-card">
        <img 
        src={movie.Poster} 
        className="movie-poster" 
        // CATCHES THE BROKEN URL OF MOVIE POSTER OR IF THE POSTER RETURNS N/A 
        onError={(e) => {
        e.currentTarget.src = noPosterImg
      }} 
        />
      
      <div className="movie-title">
        <p>{movie.Title}</p>
      </div>

      <div className="hover-info">
        <div className="year">{movie.Year}</div>
        <div className="type">{movie.Type}</div>
      </div>
    </div>
  );
}

export default Movie;
