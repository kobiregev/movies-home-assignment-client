import {
  Badge,
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Movie } from "../../types";

type MovieCardProps = BoxProps & {
  Title?: string;
  movie: Movie;
  handleMovieClick: (movie: Movie) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, handleMovieClick }) => {
  return (
    <Box
      shadow="md"
      borderRadius="md"
      display="flex"
      flexDirection={["row", "column"]}
      m="3"
      cursor="pointer"
      onClick={() => handleMovieClick(movie!)}
      overflow="hidden"
      w={["", "250px"]}
    >
      <Image src={movie?.Poster} w={["94px", "100%"]} h={["full", "350px"]} />
      <Flex flexDir="column" p="3">
        <Heading size="md" noOfLines={1}>
          {movie?.Title}
        </Heading>
        <Badge colorScheme="linkedin" mr="auto" my="1">
          {movie?.imdbRating}
        </Badge>
        <Text fontSize="sm" noOfLines={2}>
          {movie?.Plot}
        </Text>
      </Flex>
    </Box>
  );
};

export default MovieCard;
