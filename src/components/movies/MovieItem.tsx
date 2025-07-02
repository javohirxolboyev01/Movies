import React from "react";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { PlayCircleOutlined } from "@ant-design/icons";

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      <div className="group relative rounded-lg overflow-hidden aspect-[2/3] bg-black shadow-md hover:scale-105 hover:z-10 hover:shadow-2xl transition-transform duration-300 h-full">
        <img
          loading="lazy"
          src={IMAGE_URL + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded shadow">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>

        <h3 className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold line-clamp-1">
          {movie.title}
        </h3>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircleOutlined className="!text-red-600 text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieItem);
