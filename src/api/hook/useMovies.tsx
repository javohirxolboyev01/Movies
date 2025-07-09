import { useQuery } from "@tanstack/react-query";
import { api } from ".."; // sizda axios instance shu yerda

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () =>
        api.get("discover/movie", { params }).then((res) => res.data),
    });

  const getMovieSingle = (id: string) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  const getMovieDetail = (id: string, path: string) =>
    useQuery({
      queryKey: ["movie", id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
    });

  const getActorDetail = (id: string) =>
    useQuery({
      queryKey: ["actor", id],
      queryFn: () =>
        api.get(`person/${id}?language=en-US`).then((res) => res.data),
    });

  const getActorCredits = (id: string) =>
    useQuery({
      queryKey: ["actor-credits", id],
      queryFn: () =>
        api
          .get(`person/${id}/movie_credits?language=en-US`)
          .then((res) => res.data),
    });

  return {
    getMovies,
    getMovieSingle,
    getMovieDetail,
    getActorDetail,
    getActorCredits,
  };
};
