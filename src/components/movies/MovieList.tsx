import React from "react";
import { Box } from "@chakra-ui/react";
import { Movie } from "../../types";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[] | undefined;
  handleMovieClick: (movie: Movie) => void;
};

const MovieList: React.FC<MovieListProps> = ({ movies, handleMovieClick }) => {
  return (
    <Box
      display={["box", "flex"]}
      flexWrap={["initial", "wrap"]}
      alignItems="center"
      justifyContent="center"
      maxW={["", "container.xl"]}
    >
      {movies?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          handleMovieClick={handleMovieClick}
        />
      ))}
    </Box>
  );
};

export default MovieList;
