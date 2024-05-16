import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import axios from "axios";

interface Video {
  name: string;
  key: string;
}

const MovieVideoPlayer: React.FC<{ id: any; options: {} }> = ({
  id,
  options,
}) => {
  const [video, setVideo] = useState<Video[] | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      )
      .then((response) => {
        const data = response.data.results;

        const filteredData = data.filter((video: Video) =>
          video.name.toLowerCase().includes("trailer")
        );

        setVideo(filteredData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  const opts: YouTubeProps["opts"] = {
    height: "650px",
    width: "100%",
    raduis: "4px",
  };

  return (
    <div className="video">
      {video && video.length > 0 && (
        <div>
          <YouTube
            videoId={video[0].key}
            opts={opts}
            className="youtube-video"
          />
        </div>
      )}
    </div>
  );
};

export default MovieVideoPlayer;
