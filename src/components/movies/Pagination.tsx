import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
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
    <Box w="full" display="flex" justifyContent="space-between">
      <IconButton
        aria-label="Previous page"
        boxSize="16"
        sx={{ _hover: { cursor: "pointer" } }}
        onClick={() => {
          setPage((prevState) => prevState - 1);
        }}
        icon={<GrFormPreviousLink />}
        disabled={!!(page <= 1)}
      />
      <IconButton
        aria-label="Next page"
        boxSize="16"
        sx={{ _hover: { cursor: "pointer" } }}
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
        icon={<GrFormNextLink />}
        disabled={!!(page >= totalPages)}
      />
    </Box>
  );
};

export default Pagination;
