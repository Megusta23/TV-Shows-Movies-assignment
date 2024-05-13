import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/details.css";

interface MovieDetails {
  title: string;
  overview: string;
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

  return (
    <div className="details-container">
      {movieDetails ? (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
