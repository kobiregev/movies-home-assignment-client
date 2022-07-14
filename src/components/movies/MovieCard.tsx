import {
  Badge,
  Box,
  BoxProps,
  Container,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Movie } from "../../types";

type MovieCardProps = BoxProps & {
  Title?: string;
  movie?: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Box
      shadow="md"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="3"
    >
      <Image src={movie?.Poster} />
      <Heading size="md">{movie?.Title}</Heading>
      <Badge>{movie?.imdbRating}</Badge>
      <Container>{movie?.Plot}</Container>
    </Box>
  );
};

export default MovieCard;
