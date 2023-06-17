import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


/* define the NavBar component */
function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}


export default NavBar;
