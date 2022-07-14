import { baseURL } from "../data/constants";
import { GetMoviesResponse, Movie } from "../types";

export const fetchMovies = async (
  page: number = 1
): Promise<GetMoviesResponse> => {
  const res = await fetch(`${baseURL}/movies/${page}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return await res.json();
};

export const searchMovieByTitle = async (
  title: string
): Promise<Movie | undefined> => {
  const res = await fetch(`${baseURL}/movie/${title}`);
  if (!res.ok) throw new Error("Failed to fetch movie");
  return await res.json();
};
