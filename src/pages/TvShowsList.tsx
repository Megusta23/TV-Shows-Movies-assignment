import { Link } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

const Details: React.FC = () => {
  const [tvSeries, setTvSeries] = useState<any[]>([]);

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

        console.log(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>List of all TV shows goes here</h1>

      <div className="home-grid">
        {tvSeries.map((tvSeries, index) => (
          <div key={index} className="individual-card-component">
            {/* Movie details */}
            <p>Title: {tvSeries.name}</p>
            <p>id: {tvSeries.id}</p>
            <Link to={`/tv-shows/${tvSeries.id}`}>
              To details about the TV series
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
