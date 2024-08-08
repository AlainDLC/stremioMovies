import { useState } from "react";
import Box from "./Box";

export default function ListBox({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <Box>
      <ul className="list">
        {movies?.map((movie) => (
          <MovieList movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </Box>
  );
}

function MovieList({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🎬</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
