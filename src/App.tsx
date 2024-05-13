import { TvShowsList, TvShow, MoviesList, Movie } from "./pages";

import { Navbar } from "./components";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TvShowsList />} />

        {/* Routes for the Movie section of the page */}
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id" element={<Movie />} />

        {/* Routes for the TV Shows section of the page */}
        <Route path="/tv-shows" element={<TvShowsList />} />
        <Route path="/tv-shows/:id" element={<TvShow />} />
      </Routes>
    </>
  );
};

export default App;
