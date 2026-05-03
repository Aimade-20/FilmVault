import '../index.css'
// import AddMovie from './AddMovie'

 export default function Navbar() {
    return(
  <nav className="navbar">
    <h1>FilmVault</h1>
    <button className="add-btn" >Add Movie</button>
    {/* <AddMovie /> */}
  </nav>
    )
}