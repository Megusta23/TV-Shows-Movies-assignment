import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/details.css";

import star from "../assets/star.svg";
import { TVShowVideoPlayer } from "../components";

interface TvShowDetails {
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  genres: { name: string }[];
}

const TvShows: React.FC<{ options: {} }> = ({ options }) => {
  const { id } = useParams();
  const [tvShowDetails, setTvShowDetails] = useState<TvShowDetails | null>(
    null
  );
  const navigate = useNavigate();

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

  function formatnumber(num: number): string {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  }

  return (
    <div className="details-container">
      {tvShowDetails ? (
        <>
          <div className="details-container">
            {tvShowDetails ? (
              <>
                {/* This containes the main title and some additional data */}
                <button onClick={() => navigate(-1)}>&#11207; Back</button>
                <div className="flex-title-rating">
                  <div className="title-container">
                    <h1>{tvShowDetails.name}</h1>
                    <p className="movie-details">Tv Shows •</p>
                  </div>
                  <div className="rating-container">
                    <p>IMDb Rating</p>
                    <div className="IMDB-rating">
                      <img src={star} alt="star" />
                      <div className="text-rating">
                        <p>{tvShowDetails.vote_average.toFixed(1)}/10</p>
                        <p className="small">
                          {formatnumber(tvShowDetails.vote_count)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-video-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
                    alt="poster"
                  />
                  <TVShowVideoPlayer />
                </div>
                <div className="movie-categories-container">
                  {tvShowDetails.genres.map((genre, index) => (
                    <p key={index}>{genre.name}</p>
                  ))}
                </div>
                <p>{tvShowDetails.overview}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TvShows;
