import Box from "./Box";
import { ErrorMessage } from "../Appv1";
import { Loader } from "../Appv1";

export default function ListBox({
  movieData,
  isLoading,
  error,
  onSelectMovie,
}) {
  return (
    <Box>
      {isLoading && !error ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ul className="list list-movies">
          {movieData.map((movie) => (
            <MovieList
              movie={movie}
              key={movie.imdbID}
              onSelectMovie={onSelectMovie}
            />
          ))}
        </ul>
      )}
    </Box>
  );
}

function MovieList({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)} key={movie.imdbID}>
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
