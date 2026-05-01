function Filter({genres , selectedGenre , setSelectedGenre}) {
    return(
        <section className="filter-section">
            <h3>filter by Genre</h3>
            <select className=""
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            >
                {genres.map((genre) =>(
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </section>
    )
}
export default Filter