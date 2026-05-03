// import { useState } from "react";

function Details({ movie, closePopup }) {
  const close = () => {
    closePopup();
    // console.log("close");
  };

  return (
    <div className="Details-movie" id={`detail-${movie.id}`}>
      <div className="Detail-holder">
        <img src={movie.image} alt={movie.title} />
       <div>
         <p>Title : {movie.title} </p>
        <p>description : {movie.description} </p>
        <p>année : {movie.year} </p>
        <p>genre : {movie.genre}</p>
        <p>réalisateur : {movie.director} </p>
        <p>acteurs : {movie.actors} </p>

        <p>
          note : {"⭐".repeat(movie.rating)}
          {"☆".repeat(5 - movie.rating)}
        </p>
        <button className="closeCarde" onClick={close}>
          Close
        </button>
       </div>
      </div>
    </div>
  );
}

export default Details;
