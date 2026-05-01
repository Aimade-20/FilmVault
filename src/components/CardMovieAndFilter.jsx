import { useState } from "react";
import { movies } from "../data";
import "../index.css";
import Filter from "./Filter-film";
import MovieCard from "./MovieCard";
import Top3Movies from "./Top3";


function CardMovieAndFilter() {


  const [selectedGenre, setSelectedGenre] = useState("All");

  

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies = selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="cards-holder">
            <h2>Top 3</h2>
                 <div className="top3">
             <Top3Movies movies={movies}/>
         </div>
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
