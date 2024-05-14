import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/details.css";

import star from "../assets/star.svg";

interface MovieDetails {
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  genres: { name: string }[];
}

const Movie: React.FC = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

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
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => {
        const data: MovieDetails = response.data;

        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  function formatnumber(num: number): string {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  }

  return (
    <div className="details-container">
      {movieDetails ? (
        <>
          {/* This containes the main title and some additional data */}
          <div className="flex-title-rating">
            <div className="title-container">
              <h1>{movieDetails.title}</h1>
              <p className="movie-details">
                Movie • {movieDetails.release_date} • {movieDetails.runtime} min
              </p>
            </div>
            <div className="rating-container">
              <p>IMDb Rating</p>
              <div className="IMDB-rating">
                <img src={star} alt="star" />
                <div className="text-rating">
                  <p>{movieDetails.vote_average.toFixed(1)}/10</p>
                  <p className="small">
                    {formatnumber(movieDetails.vote_count)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt="poster"
            />
            <div className="video"></div>
          </div>

          <div className="movie-categories-container">
            {movieDetails.genres.map((genre, index) => (
              <p key={index}>{genre.name}</p>
            ))}
          </div>

          <p>{movieDetails.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
