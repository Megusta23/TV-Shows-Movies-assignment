import { TvShowsList, TvShow, MoviesList, Movie } from "./pages";

import { Footer, Navbar } from "./components";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const HeaderToken = import.meta.env.VITE_HEADER_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${HeaderToken}`,
    },
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <TvShowsList search={search} options={options} />
            </>
          }
        />

        {/* Routes for the Movie section of the page */}
        <Route
          path="/movies"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <MoviesList search={search} options={options} />
            </>
          }
        />
        <Route path="/movies/:id" element={<Movie options={options} />} />

        {/* Routes for the TV Shows section of the page */}
        <Route
          path="/tv-shows"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <TvShowsList search={search} options={options} />
            </>
          }
        />
        <Route path="/tv-shows/:id" element={<TvShow options={options} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
