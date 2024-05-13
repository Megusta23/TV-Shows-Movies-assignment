import { Link } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

const Details: React.FC = () => {
  const oprtions = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(``)
      .then((response) => {
        const data = response.data;
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div>
      <h1>List of all TV shows goes here</h1>

      <Link to="/tv-shows/1">Tv Show 1</Link>
      <Link to="/tv-shows/2">Tv Show 2</Link>
    </div>
  );
};

export default Details;
