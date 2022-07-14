import React from "react";
import { Box } from "@chakra-ui/react";
import Movies from "../components/movies/Movies";

const Home: React.FC = () => {
  return (
    <Box px={{ base: "3" }} w="full" display="flex" flexDir="column">
      <Movies />
    </Box>
  );
};

export default Home;
