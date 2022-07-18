import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Movie } from "../../types";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: Movie | undefined;
}

export const MovieModal: React.FC<MovieModalProps> = ({
  isOpen,
  onClose,
  movie,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["sm", "3xl"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="xl" mt="3">
          {movie?.Title} ({movie?.Year})
          <Text fontSize="md">{movie?.Genre}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display={["", "flex"]}>
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            width="100%"
            height="150"
          />
          <Box mx={["", "8"]}>
            <Text fontSize="md" color="black" my="2">
              {movie?.Plot}
            </Text>
            <Text>Country: {movie?.Country}</Text>
            <Text>Release: {movie?.Released}</Text>
            <Text>Director: {movie?.Director}</Text>
            <Text>Box office: {movie?.BoxOffice}</Text>
            <Text>Cast: {movie?.Actors}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="linkedin" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
