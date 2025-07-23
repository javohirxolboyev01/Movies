import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/components/redux";
import MovieView from "@/components/movies/MovieView";

import EmptyWishlist from "./EmptyWishlist";

const WishlistPage: React.FC = () => {
  useEffect(() => {
    document.title = "Saved | Movies";
    window.scrollTo(0, 0);
  }, []);
  const wishlist = useSelector((state: RootState) => state.Wishlist.value);
  const isEmpty = wishlist.length === 0;

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <EmptyWishlist />
          </div>
        ) : (
          <MovieView data={wishlist} />
        )}
      </div>
    </div>
  );
};

export default React.memo(WishlistPage);
