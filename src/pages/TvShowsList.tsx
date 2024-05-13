import { Link } from "react-router-dom";

const Details: React.FC = () => {
  return (
    <div>
      <h1>List of all TV shows goes here</h1>

      <Link to="/tv-shows/1">Tv Show 1</Link>
      <Link to="/tv-shows/2">Tv Show 2</Link>
    </div>
  );
};

export default Details;
