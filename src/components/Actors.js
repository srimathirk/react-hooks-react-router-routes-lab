import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDetails = actors.map((actor)=>(<div key={actor.name}>{actor.name}<ul><li>{actor.movies}</li></ul></div>))
  return <div><h1> Actors Page</h1>
  {actorsDetails}</div>;
}

export default Actors;
