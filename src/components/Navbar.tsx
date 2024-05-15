import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar: React.FC<{
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  // Load the input value from localStorage
  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      setSearchInput(savedSearch);
    }
  }, []);

  // Save the input value to localStorage
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearch(value);
    localStorage.setItem("search", value);
  };

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
        value={searchInput}
        onChange={handleInputChange}
      />
    </nav>
  );
};

export default Navbar;
