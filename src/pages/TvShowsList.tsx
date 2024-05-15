import { Link } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

import star from "../assets/star.svg";

const Details: React.FC<{ search: string }> = ({ search }) => {
  const [tvSeries, setTvSeries] = useState<any[] | null>(null);

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
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
        options
      )
      .then((response) => {
        const data = response.data.results;

        setTvSeries(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Top TV Show showcase: The Best of the best</h1>
        <p>
          Discover the epitome of television entertainment with our curated
          selection of top-rated TV shows. From gripping dramas to hilarious
          comedies, experience the finest in small-screen storytelling that has
          captivated audiences worldwide.
        </p>
      </div>
      {tvSeries ? (
        <div className="home-grid">
          {tvSeries
            .filter((item) => {
              return search.length >= 3
                ? item.name.toLowerCase().includes(search.toLowerCase())
                : true;
            })
            .map((tvSeries, index) => (
              <div key={index} className="individual-card-component">
                {/* Movie details */}
                <Link to={`/tv-shows/${tvSeries.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`}
                    alt="poster_path"
                    className="main-card-image"
                  />
                </Link>

                <div className="title-rating-container">
                  <div className="rating">
                    <img src={star} alt="star" />
                    <p>{tvSeries.vote_average.toFixed(1)}</p>
                  </div>
                  <p className="text single-line">{tvSeries.name}</p>
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

export default Details;
