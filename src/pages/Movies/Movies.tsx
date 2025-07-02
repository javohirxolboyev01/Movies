import React from "react";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import { useMovie } from "@/api/hook/useMovies";
import MovieView from "@/components/movies/MovieView";

const Movies = () => {
  const { getMovies } = useMovie();
  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get("page") || "1", 10);
  const pageSize = parseInt(params.get("pageSize") || "20", 10);

  const { data } = getMovies({
    skip: (page - 1) * pageSize,
    limit: pageSize,
  });

  const handleChangePage = (newPage: number, newPageSize?: number) => {
    const updated = new URLSearchParams(params);

    updated.set("page", String(newPage));

    if (newPageSize !== undefined) {
      updated.set("pageSize", String(newPageSize));
    }

    setParams(updated);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        <MovieView data={data?.results} />

        <div className="mt-10 flex justify-center">
          <Pagination
            current={page}
            total={data?.total || 500}
            pageSize={pageSize}
            onChange={handleChangePage}
            showSizeChanger={false}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
