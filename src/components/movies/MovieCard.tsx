import { Box, BoxProps, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Movie } from "../../types";

type MovieCardProps = BoxProps & {
  Title?: string;
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Box shadow="md" boxSize={"3xl"}>
      <Image
        src={movie.Poster}
        w="100%"
        minH="xs"
        maxH="100%"
        alt={movie.Title}
      />
      <sub>{movie.imdbRating}</sub>
      <Heading>{movie.Title}</Heading>
      <Container>{movie.Plot}</Container>
    </Box>
  );
};

export default MovieCard;
