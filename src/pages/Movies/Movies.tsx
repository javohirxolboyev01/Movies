import React, { useEffect } from "react";
import { Pagination } from "antd";

import { useParamsHook } from "@/hooks/useParamsHook";
import { useMovie } from "@/api/hook/useMovies";
import { useGenre } from "@/api/hook/useGenre";
import MovieView from "@/components/movies/MovieView";
import Genre from "@/components/Genre/Genre";

const Movies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { getMovies } = useMovie();
  const { getGenre } = useGenre();
  const { getParam, setParam } = useParamsHook();

  const genre = getParam("genre");

  const page = Number(getParam("page")) || 1;

  const handlePagination = (value: number) => {
    window.scrollTo(0, 0);
    setParam("page", value.toString());
  };

  const { data: genreData } = getGenre();
  const { data } = getMovies({
    page,
    with_genres: genre,
    without_genres: "18,36,27,10749",
  } as any);

  return (
    <div>
      <Genre data={genreData?.genres} />
      <MovieView data={data?.results} />
      <div className="flex items-center justify-center mt-12">
        <Pagination
          className="custom-pagination !gap-1 sm:!gap-0"
          current={page}
          onChange={handlePagination}
          pageSize={20}
          showSizeChanger={false}
          total={
            data?.total_results && data.total_results <= 10_000
              ? data.total_results
              : 10_000
          }
        />
      </div>
    </div>
  );
};

export default React.memo(Movies);
