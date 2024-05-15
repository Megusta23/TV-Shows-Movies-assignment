import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/home.css";

import star from "../assets/star.svg";

const MovieList: React.FC<{ search: string }> = ({ search }) => {
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
      <div className="text-container">
        <h1>Top Movie showcase: The Best of the best</h1>
        <p>
          Prepare to be dazzled by an exclusive selection of critically
          acclaimed films that have captivated audiences worldwide. From
          timeless classics to modern masterpieces, our showcase celebrates the
          pinnacle of cinematic excellence.
        </p>
      </div>
      {movies ? (
        <div className="home-grid">
          {movies
            .filter((item) => {
              return search.length >= 3
                ? item.original_title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                : true;
            })
            .map((movie, index) => (
              <div key={index} className="individual-card-component">
                {/* Movie details */}
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="poster_path"
                    className="main-card-image"
                  />
                </Link>
                <div className="title-rating-container">
                  <div className="rating">
                    <img src={star} alt="star" />
                    <p>{movie.vote_average.toFixed(1)}</p>
                  </div>
                  <p className="text single-line">{movie.original_title}</p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieList;
