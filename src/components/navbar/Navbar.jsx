import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <nav className="navlinks">
        <ul>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/sign">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
