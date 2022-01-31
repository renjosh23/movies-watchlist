import { StarFilled } from "@ant-design/icons";
import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <h4>
        {movie.title}
        <div>
        <StarFilled/> {movie.vote_average}
        </div>
      </h4>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
