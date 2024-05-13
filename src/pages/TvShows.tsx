import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/details.css";

interface TvShowDetails {
  name: string;
  overview: string;
}

const TvShows: React.FC = () => {
  const { id } = useParams();
  const [tvShowDetails, setTvShowDetails] = useState<TvShowDetails | null>(
    null
  );

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
      .get(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then((response) => {
        const data: TvShowDetails = response.data;

        setTvShowDetails(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div className="details-container">
      {tvShowDetails ? (
        <>
          <h1>{tvShowDetails.name}</h1>
          <p>{tvShowDetails.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TvShows;
