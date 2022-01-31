import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const AddPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a7b3791b53e16e00f5610e35c8958bcf&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          <div>
            <h2>
              Suggestion Movies to Watch:
            </h2>
            <div className="suggestion-list-style">
              <li style={{marginBottom: 20}}>
                Spiderman: No Way Home
              </li>
              <li style={{marginBottom: 20}}>
                The Matrix Resurrections
              </li>
              <li style={{marginBottom: 20}}>
                Ghostbuster: Afterlife
              </li>
              <li style={{marginBottom: 20}}>
                The Batman (Coming Soon)
              </li>
              <li style={{marginBottom: 20}}>
                Free Guy
              </li>
              <li style={{marginBottom: 20}}>
                Eternals
              </li>
            </div>
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
