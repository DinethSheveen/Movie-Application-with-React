import React from "react";
import noPosterImg from "../images/noPoster.jpg"

function Movie({movie}) {
  return (
    <div className="movie-card">
      {movie.Poster != "N/A" ? (
        <img src={movie.Poster} className="movie-poster" />
      ) : (
        <img src={noPosterImg} />
      )}
      <div className="movie-title">
        {movie.Poster === "N/A" ? (
          <p style={{ color: "goldenrod" }}>{movie.Title}</p>
        ) : (
          <p>{movie.Title}</p>
        )}
      </div>

      <div className="hover-info">
        <div className="year">{movie.Year}</div>
        <div className="type">{movie.Type}</div>
      </div>
    </div>
  );
}

export default Movie;
