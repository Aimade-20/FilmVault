import { useState } from 'react';
import { movies } from '../data'
import '../index.css'
import Filter from './Filter-film';

function MovieCard({ movie }) {
  console.log(movie);

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <p>Title: {movie.title}</p>
        <p>genre : {movie.genre}</p>
        <p>Note : {Array(movie.rating)
          .fill("⭐")
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}</p>
      </div>
    </div>

  )
}

function CardMovieAndFilter() {
  console.log(movies);

   const [selectedGenre, setSelectedGenre] = useState("All")

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))]

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre)

  return (
    <div className='cards-holder'>
      <h2 >Movies List</h2>
      <Filter
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div className='movies-grid'>
         {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
export default CardMovieAndFilter