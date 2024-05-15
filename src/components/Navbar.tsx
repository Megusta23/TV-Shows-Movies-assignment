import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";

const Navbar: React.FC<{
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearch }) => {
  return (
    <nav className="navbar-container">
      <div className="link-container">
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv-shows"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Tv Shows
        </NavLink>
      </div>

      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
