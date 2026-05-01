import "./App.css";
import { useState } from "react";
import { movies as fakeMovies } from "./data";
import Navbar from "./components/Navbar.jsx";
import CardMovieAndFilter from "./components/CardMovieAndFilter.jsx";
import Hero from "./components/TopMovie.jsx";
// import Top3Movies from "./components/Top3.jsx";


function App() {
  const [movies] = useState(fakeMovies);

  const topMovie = movies.reduce((best, current) =>
    current.rating > best.rating ? current : best,
  );

  return (
    <>
      <div id="landing" style={{ backgroundImage: `url(${topMovie.image})` }}>
        <Navbar />
        <Hero movie={topMovie} />
      </div>
      <div className="movies-list">
        <CardMovieAndFilter />
      </div>
    </>
  );
}

export default App;
