import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/movies">Movies</Link>
      <Link to="/tv-shows">Tv Shows</Link>

      <input type="text" id="search" />
    </nav>
  );
};

export default Navbar;
