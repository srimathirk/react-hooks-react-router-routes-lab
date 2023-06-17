import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails= movies.map((movie,index)=>(<div key={index}>{movie.title} {movie.time}<ul><li>{movie.genres}</li></ul></div>))
  return <div><h1>Movies Page</h1>
  {movieDetails}</div>;
}

export default Movies;
