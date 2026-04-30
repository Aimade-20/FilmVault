import { useState } from "react";
import Details from "./DetailsMovie";

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  // console.log(movie);
  // function openDetail() {
  //   document.getElementById(`detail-${movie.id}`).display = "flex"
  // }

  const closePopupDetails = () => {
    typeof setIsOpen;
    setIsOpen(false);
  };

  const testIsOpen = () => {
    setIsOpen(true);
    console.log("trying this test" + isOpen);
  };

  return (
    <div className="movie-card" onClick={() => setIsOpen(true)}>
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <p>Title: {movie.title}</p>
        <p>genre : {movie.genre}</p>
        <p>
          Note : {"⭐".repeat(movie.rating)}
          // {"☆".repeat(5 - movie.rating)}
        </p>
      </div>
      {isOpen && <Details movie={movie} closePopup={testIsOpen} />}
    </div>
  );
}

export default MovieCard;
