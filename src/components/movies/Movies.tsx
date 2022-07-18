import { Box, Heading, Spinner, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Movie } from "../../types";
import { MovieModal } from "./MovieModal";
import { SearchMovie } from "./SearchMovie";
import useFetchMovies from "../../hooks/useFetchMovies";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

const Movies: React.FC = () => {
  const [isSearchDirty, setIsSearchDirty] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [movies, setMovies] = useState<Movie | Movie[] | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, error, data, refetch } = useFetchMovies(
    page,
    isSearchDirty
  );

  useEffect(() => {
    refetch();
  }, [isSearchDirty]);

  useEffect(() => {
    setMovies(data?.movies);
  }, [data, isLoading, isSearchDirty]);

  if (error) {
    return <p>Error!</p>;
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  const renderMovies = () => {
    if (isLoading) {
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          my="4"
          mx="auto"
          display="flex"
          justifySelf="center"
        />
      );
    }
    if (movies instanceof Array) {
      return (
        <MovieList movies={data?.movies} handleMovieClick={handleMovieClick} />
      );
    }
    if(movies){
      return <MovieCard movie={movies} handleMovieClick={handleMovieClick} />;
    }
  };

  return (
    <Box>
      <Heading
        as="h2"
        size={{ base: "lg", md: "xl" }}
        my={3}
        textAlign="center"
      >
        Movies - Searcher
      </Heading>
      <SearchMovie setMovies={setMovies} setIsSearchDirty={setIsSearchDirty} />
      <Box w="full">{renderMovies()}</Box>
      <MovieModal isOpen={isOpen} onClose={onClose} movie={selectedMovie} />
      {movies instanceof Array && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={data?.totalPages!}
        />
      )}
    </Box>
  );
};

export default Movies;
