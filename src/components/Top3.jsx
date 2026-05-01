// import movies from '../data'

import MovieCard from "./MovieCard";

export default function Top3Movies({movies}) {
    const Ranking = [...movies]
    .sort((a,b) => b.rating - a.rating).slice(0,3)
    console.log(Ranking); 
    return (
        <div className="top3">
                {Ranking.map((movie) =>(
                    <MovieCard key ={movie.id} movie={movie} />
                ))}
        </div>
    )
}