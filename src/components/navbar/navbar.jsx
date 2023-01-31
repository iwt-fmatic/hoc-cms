import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import logo from "./logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            {/* <img src={logo} className="hoc-logo"/> */}
            <h1>Logo</h1>
        </div>
      <div className="links">
        <Link to="/"> Lorem </Link>
        <Link to="/"> Ipsum </Link>
      </div>
    </div>
  );
};
