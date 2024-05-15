import { TvShowsList, TvShow, MoviesList, Movie } from "./pages";

import { Footer, Navbar } from "./components";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <TvShowsList search={search} />
            </>
          }
        />

        {/* Routes for the Movie section of the page */}
        <Route
          path="/movies"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <MoviesList search={search} />
            </>
          }
        />
        <Route path="/movies/:id" element={<Movie />} />

        {/* Routes for the TV Shows section of the page */}
        <Route
          path="/tv-shows"
          element={
            <>
              <Navbar setSearch={setSearch} />
              <TvShowsList search={search} />
            </>
          }
        />
        <Route path="/tv-shows/:id" element={<TvShow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
