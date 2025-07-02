import type { IMovie } from "@/types";
import React, { type FC } from "react";
import MovieItem from "./MovieItem";

interface Props {
  data: undefined | IMovie[];
}
const MovieView: FC<Props> = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3 container mx-auto">
      {data?.map((movie: IMovie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);
