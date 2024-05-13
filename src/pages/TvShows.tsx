import { useParams } from "react-router-dom";

const TvShows: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>TV Show {id}</h1>
    </div>
  );
};

export default TvShows;
