import { useMovie } from "@/api/hook/useMovies";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import MovieView from "@/components/movies/MovieView";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Movies";
    window.scrollTo(0, 0);
  }, []);
  const { getMovies } = useMovie();
  const { data: movies } = getMovies({ page: 13 });
  const { data, isLoading, error } = getMovies({ page: 5 });

  if (isLoading)
    return <div className="text-center text-white">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error loading movies</div>;
  return (
    <div>
      <HeroSlider data={data?.results?.slice(0, 10) ?? []} />
      <MovieView data={movies?.results?.slice(10, 20)} />
    </div>
  );
};

export default React.memo(Home);
