import React from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  return (
    <Box
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="8"
    >
      <IconButton
        aria-label="Previous page"
        sx={{ _hover: { cursor: "pointer" } }}
        onClick={() => {
          setPage((prevState) => prevState - 1);
        }}
        icon={<GrFormPreviousLink />}
        disabled={!!(page <= 1)}
        colorScheme="linkedin"
        size="lg"
      />
      <Text>{page}</Text>
      <IconButton
        aria-label="Next page"
        sx={{ _hover: { cursor: "pointer" } }}
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
        icon={<GrFormNextLink />}
        disabled={!!(page >= totalPages)}
        colorScheme="linkedin"
        size="lg"
      />
    </Box>
  );
};

export default Pagination;
