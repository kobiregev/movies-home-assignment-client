import React from "react";
import { Movie } from "../../types";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[] | undefined;
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
