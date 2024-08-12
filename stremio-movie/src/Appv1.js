import { useEffect, useState } from "react";
import Logo from "./component/Logo";
import SearchBar from "./component/SearchBar";
import NumResult from "./component/NumResult";
import ListBox from "./component/ListBox";
import WatchBoxList from "./component/WatchBoxList";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://media.licdn.com/dms/image/v2/C4E03AQFMiOReMWN3mQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652816749451?e=2147483647&v=beta&t=1eLlS5dIKF8OcWMjSdZXwFWD7-8U_uUak2bWT2ERbes",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "8a615a41";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("Sleepwalking");
  const [selectedId, isSelectedId] = useState(null);

  function handleSelectMovie(id) {
    isSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    isSelectedId(null);
  }

  useEffect(() => {
    async function fetchMove() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        console.log(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (!query.length) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMove();
  }, [query]);

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResult movies={query} />
      </NavBar>
      <Main>
        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
          />
        ) : (
          <>
            <ListBox
              movieData={movies}
              isLoading={isLoading}
              error={error}
              onSelectMovie={handleSelectMovie}
            />

            <WatchBoxList movieData={tempWatchedData} />
          </>
        )}
      </Main>
    </>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export function Loader() {
  return <p>Loading....</p>;
}

export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🧨{message} </span>
    </p>
  );
}

function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button type="button" className="btn-back" onClick={onCloseMovie}>
        🔙
      </button>
      {selectedId}
    </div>
  );
}
