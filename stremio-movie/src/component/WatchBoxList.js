import Summary from "./Summary";
import Box from "./Box";

export default function WatchBoxList({ movieData }) {
  const watched = movieData;

  return (
    <Box>
      <Summary watched={watched} />
      <ul className="list list-movies">
        {watched.map((movie) => (
          <WatchList movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </Box>
  );
}

function WatchList({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
