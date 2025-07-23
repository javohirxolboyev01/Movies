import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import EmptyWish from "@/assets/Logo/Logo.png";
import { useMovie } from "@/api/hook/useMovies";
import MovieView from "@/components/movies/MovieView";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BsBookmark } from "react-icons/bs";

const EmptyWishlist = () => {
  const navigate = useNavigate();
  const { getMovies } = useMovie();
  const { data } = getMovies({ sort_by: "popularity.desc", page: 20 });

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-10 px-4">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <img
          src={EmptyWish}
          alt="Empty"
          className="w-40 h-40 object-contain mb-6 "
        />
        <h2 className="text-xl md:text-2xl font-bold">
          Yoqqan kinolar ro‘yxati bo‘sh
        </h2>
        <p className="text-sm mt-2 max-w-md text-gray-600 dark:text-gray-400">
          Kinosahifada{" "}
          <span className=" text-black dark:text-white">
            <BsBookmark className="inline-block" />
          </span>{" "}
          tugmasini bosib saqlang. Akkauntga kirganingizda ular saqlanib qoladi.
        </p>
        <Button
          type="primary"
          onClick={() => navigate("/")}
          style={{ background: "black" }}
          icon={<ArrowLeftOutlined />}
        >
          Bosh sahifa
        </Button>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Ommabop kinolar
        </h2>
        <MovieView data={data?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default React.memo(EmptyWishlist);
