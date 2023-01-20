import React from "react";
import "../../css/NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ zIndex: "99" }}>

      <div className="Link-Container">
        <NavLink to="/dfs">DFS</NavLink>

        <Link to="/dijkstra">Dijkstra Algo</Link>
      </div>
    </nav>
  );
}

export default NavBar;
