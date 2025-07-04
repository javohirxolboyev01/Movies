import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useGenre = () => {
  const getGenre = () =>
    useQuery({
      queryKey: ["gener"],
      queryFn: () =>
        api.get("genre/movie/list").then((res) => res.data),
    });

  return { getGenre };
};
