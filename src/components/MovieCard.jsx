import { useState } from "react";
import Details from "./DetailsMovie";

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);

  const closePopupDetails = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="movie-card" onClick={() => setIsOpen(true)}>
        <img src={movie.image} alt={movie.title} />
        <div className="movie-info">
          <p>Title: {movie.title}</p>
          <p>genre : {movie.genre}</p>
          <p>
            Note : {"⭐".repeat(movie.rating)}
            {"☆".repeat(5 - movie.rating)}
          </p>
        </div>
      </div>
      {isOpen && <Details movie={movie} closePopup={closePopupDetails} />}
    </>
  );
}

export default MovieCard;
