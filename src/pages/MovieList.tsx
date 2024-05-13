import { Link } from "react-router-dom";

const MovieList: React.FC = () => {
  return (
    <div>
      <h1>List of all Movies goes here</h1>

      <Link to="/movies/1">Movies 1</Link>
      <Link to="/movies/2">Movies 2</Link>
    </div>
  );
};

export default MovieList;
