import Summary from "./Summary";
import Box from "./Box";

export default function WatchBoxList({ movieData, onDeletedList }) {
  return (
    <Box>
      <Summary watched={movieData} />
      <ul className="list list-movies">
        {movieData.map((movie) => (
          <WatchList
            movie={movie}
            key={movie.imdbID}
            onDeletedList={onDeletedList}
          />
        ))}
      </ul>
    </Box>
  );
}

function WatchList({ movie, onDeletedList }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🥷</span>
          <span>{movie.userRating || "N/A"}</span>{" "}
          {/* Visa "N/A" om userRating inte finns */}
        </p>
        <p>
          <span>⏲️</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          type="button"
          className="btn-delete"
          onClick={() => onDeletedList(movie.imdbID)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
