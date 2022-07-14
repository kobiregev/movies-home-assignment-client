import { Box, Heading, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useFetchMovies from "../../hooks/useFetchMovies";
import { Movie } from "../../types";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import { SearchMovie } from "./SearchMovie";

const Movies: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie | Movie[] | undefined>(undefined);
  const [isSearchDirty, setIsSearchDirty] = useState<boolean>(false);

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

  const renderMovies = () => {
    if (isLoading) {
      return <Spinner m="auto" size="xl" />;
    }
    if (movies instanceof Array) {
      return <MovieList movies={data?.movies} />;
    }
    return <MovieCard movie={movies} />;
  };

  return (
    <div>
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
      {movies instanceof Array && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={data?.totalPages!}
        />
      )}
    </div>
  );
};

export default Movies;
