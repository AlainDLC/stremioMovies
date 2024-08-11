import Box from "./Box";
import { ErrorMessage } from "../Appv1";
import { Loader } from "../Appv1";

export default function ListBox({ movieData,isLoading,error }) {

  return (
    <Box>
      {isLoading && !error ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ul className="list">
          {movieData?.map((movie) => (
            <MovieList movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      )}
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
