import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDetails = directors.map((director)=>(<div key={director.name}>{director.name}<ul><li>{director.movies}</li></ul></div>))
  return <div><h1>Directors Page</h1>
  {directorDetails}</div>;
}

export default Directors;
