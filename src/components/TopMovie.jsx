function Hero({ movie }) {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>{movie.title}</h1>
        <p>{movie.genre}</p>
        <p>{movie.description}</p>
        <p>{"⭐".repeat(movie.rating)}</p>
        <button>Plus d'infos</button>
      </div>
    </div>
  );
}
export default Hero;