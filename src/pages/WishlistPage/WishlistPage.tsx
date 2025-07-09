import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/components/redux";
import MovieView from "@/components/movies/MovieView";
import Logo from "@/assets/Logo/Logo.png";

const WishlistPage: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.Wishlist.value);
  const isEmpty = wishlist.length === 0;

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <img
              src={Logo}
              alt="No data"
              width={90}
              className="opacity-60 mb-4"
            />
            <h2 className="text-lg text-gray-700 dark:text-white font-medium">
              Nothing saved yet.
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Add your favorite movies to see them here.
            </p>
          </div>
        ) : (
          <MovieView data={wishlist} />
        )}
      </div>
    </div>
  );
};

export default React.memo(WishlistPage);
