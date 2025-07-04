import React from "react";
import type { IMovie } from "@/types";
import MovieItem from "./MovieItem";
import Logo from "@/assets/Logo/Logo.png";

interface Props {
  data: IMovie[] | undefined;
}

const MovieView: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div>
        <div className="w-full h-screen grid place-items-center ">
          <div className="flex flex-col items-center">
            <img src={Logo} width={80} alt="Loading..." />
            <p className="text-red-600 dark:text-white text-sm mt-2 ml-3">
              Yuklanmoqda...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3 container mx-auto">
      {data?.map((movie: IMovie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);
