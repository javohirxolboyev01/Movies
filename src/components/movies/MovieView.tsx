import React from "react";
import type { IMovie } from "@/types";
import MovieItem from "./MovieItem";
import Logo from "@/assets/Logo/Logo.png";

interface Props {
  data?: IMovie[];
  isLoading?: boolean;
}

const MovieView: React.FC<Props> = ({ data = [], isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <img
          src={Logo}
          alt="Loading"
          width={80}
          className="animate-pulse opacity-70"
        />
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <img src={Logo} alt="No data" width={90} className="opacity-70" />
        <h2 className="mt-4 text-lg text-gray-700 dark:text-white font-medium">
          No results found.
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Please try again with different filters.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {data.map((movie: IMovie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MovieView);
