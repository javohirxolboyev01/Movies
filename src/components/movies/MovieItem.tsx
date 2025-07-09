import React from "react";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/feature/wishlistSlice";
import type { RootState } from "../redux";

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlists = useSelector((state: RootState) => state.Wishlist.value);

  const handleWishlist = () => dispatch(toggleWishlist(movie));

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="group w-full cursor-pointer relative">
      <div className="relative rounded-t-lg overflow-hidden">
        <img
          onClick={handleClick}
          src={IMAGE_URL + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover aspect-[2/3] rounded-t-lg transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist();
          }}
          className="absolute top-2 right-2 z-10 px-1.5 py-1 rounded-full bg-white/20 backdrop-blur-sm"
        >
          {wishlists.some((item) => item.id === movie.id) ? (
            <HeartFilled className="!text-red-600 text-[20px] transition duration-200" />
          ) : (
            <HeartOutlined className="text-gray-600 text-[20px] hover:text-red-500 transition duration-200" />
          )}
        </button>
      </div>

      <div className="p-4 rounded-b-lg transition duration-300 bg-white text-black dark:bg-black dark:text-white shadow-md dark:shadow-lg">
        <h3
          onClick={handleClick}
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
