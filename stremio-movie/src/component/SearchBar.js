import { useRef } from "react";
import { useKeyListiner } from "./useKeyListiner";

export default function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  useKeyListiner("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
