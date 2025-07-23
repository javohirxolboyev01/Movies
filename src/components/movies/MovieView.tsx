import React from "react";
import type { IMovie } from "@/types";
import MovieItem from "./MovieItem";

interface Props {
  data?: IMovie[];
  isLoading?: boolean;
}

const MovieView: React.FC<Props> = ({ data }) => {
  if (data?.length === 0) {
    window.scrollTo(0, 0);
    return <div>{/* <EmptyWishlist /> */}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        {data?.map((movie: IMovie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MovieView);
