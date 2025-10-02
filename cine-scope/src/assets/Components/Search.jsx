import React from "react";
import { LiaSearchengin } from "react-icons/lia";

export default function Search({movieTitle, handleKeyEvent, renderMovie, setMovieTitle,}) {
  return (
    <>
      <div id="searchMovie" className="input-controls">
        <input
          type="text"
          value={movieTitle}
          placeholder="Search though 1000 of movies..."
          onChange={(event) => {
            setMovieTitle(event.target.value);
          }}
          onKeyDown={(event) => {
            handleKeyEvent(event);
          }}
        />
        <button onClick={renderMovie}>
          Search <LiaSearchengin className="search-icon" />
        </button>
      </div>
    </>
  );
}
