import React from "react";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="group w-full cursor-pointer relative">
      <div className="relative rounded-t-lg overflow-hidden">
        <img
          onClick={() => navigate(`/movies/${movie.id}`)
         
        }
          src={IMAGE_URL + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover aspect-[2/3] rounded-t-lg transition-transform duration-300 group-hover:scale-[1.03]" // faqat rasmga hover ta’sir qiladi
          loading="lazy"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <HeartOutlined className="!text-black text-lg bg-white/60 p-1 rounded-full hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-zinc-800 p-4 text-white rounded-b-lg">
        <h3
          onClick={() => navigate(`/movies/${movie.id}`)}
          className="text-base font-semibold line-clamp-1 hover:text-blue-600"
        >
          {movie.title}
        </h3>

        <div className="flex justify-between items-center text-sm opacity-80 mt-1">
          <span>{movie.release_date.slice(0, 4)}</span>
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>{movie.adult ? "18+" : "All"}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieItem);
