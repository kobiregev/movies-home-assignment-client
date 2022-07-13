//  import { GetMoviesResponse } from "../types";

import { baseURL } from "../data/constants";
import { GetMoviesResponse } from "../types";

export const fetchMovies = async (
  page: number = 1
): Promise<GetMoviesResponse> => {
  const res = await fetch(`${baseURL}/movies/${page}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return await res.json();
};

// export const searchMovieByTitle = async () => {};
