import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="link-container">
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">Tv Shows</Link>
      </div>

      <input type="text" id="search" />
    </nav>
  );
};

export default Navbar;
