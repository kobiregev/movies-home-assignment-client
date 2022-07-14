import { useQuery } from "react-query";
import { fetchMovies } from "../services/movies";

export default function useFetchMovies(page: number, isCustomSearch: boolean) {
  const moviesQuery = useQuery(
    ["movies", page],
    async () => await fetchMovies(page),
    { enabled: !isCustomSearch }
  );

  return moviesQuery;
}
