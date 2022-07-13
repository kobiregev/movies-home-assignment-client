import React from "react";
import { Box, Flex, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchMovies } from "../services/movies";
import { Spinner } from "@chakra-ui/react";
import MovieCard from "../components/movies/MovieCard";

const Home = () => {
  const { isLoading, error, data } = useQuery(
    ["movies"],
    async () => await fetchMovies()
  );

  console.log(isLoading, error, data);
  if (isLoading) {
    return <Spinner m="auto" size="xl" />;
  }

  if (error) {
    return <p>Error!</p>;
  }
  return (
    <Box className="App" px={{ base: "3" }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} my={3}>
        Movies - Searcher
      </Heading>
      <Input w={{ base: "full", md: "50%" }} placeholder="Search Movie..." />
      <Flex gap={{ base: "3" }} wrap="wrap">
        {data?.movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Flex>
    </Box>
  );
};
export default Home;
