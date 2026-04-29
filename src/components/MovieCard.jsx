import { movies } from '../data'
import '../index.css'

  function MovieCard({movie}) {
  console.log(movie);
  
    return(
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

 function CardMovie (){
  console.log(movies);
  
  return(
    <div className='cards-holder'>
      <h2>Movies List</h2>
       <div className='movies-grid'>
         {movies.map((movie) => (
          <MovieCard key ={movie.id} movie ={movie} />
        ))}
       </div>
    </div>
  )
}
export default CardMovie