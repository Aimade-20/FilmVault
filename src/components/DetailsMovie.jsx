function Details({ movie, closePopup }) {
  console.log("i am movie details");
  const close = () => {
    closePopup();
    console.log("close");
  };

  // function closeDetail() {

  //     document.getElementById(`detail-${movie.id}`).style.display = "none"
  //     console.log(document.getElementById(`detail-${movie.id}`));

  // }
  return (
    <div className="Details-movie" id={`detail-${movie.id}`}>
      <div className="Detail-holder">
        <img src={movie.image} alt={movie.title} />
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
  );
}

export default Details;
