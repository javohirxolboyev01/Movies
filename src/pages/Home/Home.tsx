import { useMovie } from "@/api/hook/useMovies";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import MovieView from "@/components/movies/MovieView";
import React from "react";

const Home = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies({ page: 10 });
  const { data:movies } = getMovies({ page: 13 });
  console.log(data?.results);
  return (
    <div>
      <HeroSlider data={data?.results?.slice(0, 10)} />
      <MovieView data={movies?.results?.slice(11, 19)} />
    </div>
  );
};

export default React.memo(Home);
