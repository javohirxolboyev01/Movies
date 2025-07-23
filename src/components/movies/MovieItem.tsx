import React from "react";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/feature/wishlistSlice";
import type { RootState } from "../redux";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { MdStars } from "react-icons/md";

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlists = useSelector((state: RootState) => state.Wishlist.value);
  const isInWishlist = wishlists.some((item) => item.id === movie.id);

  const handleWishlist = () => dispatch(toggleWishlist(movie));
  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden">
        <img
          src={IMAGE_URL + movie.poster_path}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          {movie.release_date.slice(0, 4)}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist();
          }}
          className="absolute top-2 right-2 bg-white/20  p-[6px] rounded-full hover:bg-gray-400 transition cursor-pointer select-none"
        >
          {isInWishlist ? (
            <FaBookmark className="text-lg " />
          ) : (
            <FaRegBookmark className="text-lg text-black dark:text-white" />
          )}
        </button>
      </div>

      <div className="p-3 space-y-1 dark:bg-black bg-white dark:text-white text-black">
        <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-red-500 transition">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <MdStars className="text-base" />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieItem);
