
import './App.css'
import Navbar from './components/Navbar.jsx'
import CardMovie from './components/MovieCard.jsx'
import Hero from './components/TopMovie.jsx';
import {movies} from './data.js'

function App() {
  const topMovie = movies.reduce((best, current) =>
    current.rating > best.rating ? current : best,
  );
  return (
    <>
    <div id='landing' style={{ backgroundImage: `url(${topMovie.image})` }}>
        <Navbar />
        <Hero movie={topMovie}/>
    </div>

        <CardMovie/>
    </>
  )
}

export default App
