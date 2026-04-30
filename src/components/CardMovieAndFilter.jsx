import { useState } from "react";
import { movies } from "../data";
import "../index.css";
import Filter from "./Filter-film";
import MovieCard from "./MovieCard";

function CardMovieAndFilter() {
  console.log(movies);

  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="cards-holder">
      <h2>Movies List</h2>
      <Filter
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default CardMovieAndFilter;
