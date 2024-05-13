import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/home.css";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[] | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRhNjhkMGFlNGJkMWYxOTlkZmY0NDMwZTYyZTg0ZSIsInN1YiI6IjY2NDIzNjhlYmEyNzc2ZmFkZjk2OGM4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bkE4ab6qINh36wdHBnMGsbP1czbFFLjqE7ZHBKPMEK8",
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        options
      )
      .then((response) => {
        const data = response.data.results;

        setMovies(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="home-container">
      {movies ? (
        <div>
          <h1>List of all Movies goes here</h1>

          <div className="home-grid">
            {movies.map((movie, index) => (
              <div key={index} className="individual-card-component">
                {/* Movie details */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="poster_path"
                />
                <p>{movie.original_title}</p>
                <p>id: {movie.id}</p>
                <Link to={`/movies/${movie.id}`}>To details about movie</Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieList;
