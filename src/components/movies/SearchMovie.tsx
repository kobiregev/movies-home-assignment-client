import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useSearchMovie from "../../hooks/useSearchMovie";
import { Movie } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SearchMovieProps {
  setMovies: React.Dispatch<React.SetStateAction<Movie | Movie[] | undefined>>;
  setIsSearchDirty: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchMovie: React.FC<SearchMovieProps> = ({
  setMovies,
  setIsSearchDirty,
}) => {
  const [title, setTitle] = useState<string>("");
  const debouncedTitle = useDebounce(title);
  const { data, error, status } = useSearchMovie(debouncedTitle);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsSearchDirty(!!value.trim());
    setTitle(value);
  };
  const notify = () => {
    console.log("asd")
    toast("Movie not found")
  };

  useEffect(() => {
    if (error) {
      notify();
      setMovies(undefined);
    }

    if (!error && data) {
      setMovies(data);
    }
  }, [data, error]);

  return (
    <>
      <Input
        w={{ base: "full", md: "50%" }}
        placeholder="Search Movie..."
        value={title}
        onChange={handleInputChange}
      />
      <ToastContainer />
    </>
  );
};
