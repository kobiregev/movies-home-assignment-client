import { useQuery } from "react-query";
import { searchMovieByTitle } from "../services/movies";

export default function useSearchMovie(title: string) {
  const isEnabled = title.trim() !== "";
  const movieQuery = useQuery(
    ["movie", title],
    async () => await searchMovieByTitle(title),
    {
      enabled: isEnabled,
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  return movieQuery;
}
