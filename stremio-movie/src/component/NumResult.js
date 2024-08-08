import { useState } from "react";

export default function NumResult({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
