import React from "react";
import { IMAGE_URL } from "@/const";
import { useNavigate, useParams } from "react-router-dom";
import { Image } from "antd";
import { useMovie } from "@/api/hook/useMovies";
import MovieView from "@/components/movies/MovieView";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();

  const { data } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={IMAGE_URL + data?.backdrop_path}
          alt={data?.title}
          className="w-full h-full object-cover object-top brightness-[0.4]"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white dark:!text-white">
            {data?.title}
          </h1>
          <p className="text-sm md:text-base max-w-2xl text-white/70 dark:text-gray-300">
            {data?.overview}
          </p>
          {!!data?.budget && (
            <p className="mt-3 text-red-600 dark:text-red-400 font-semibold">
              Budget: ${data.budget.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {imagesData?.backdrops?.length > 0 && (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
            Gallery
          </h2>

          <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
            {imagesData.backdrops.slice(0, 15).map((item: any, inx: number) => (
              <Image
                key={inx}
                src={IMAGE_URL + item.file_path}
                preview={false}
                className="rounded-lg object-cover flex-shrink-0 w-[160px] h-[90px] sm:w-[200px] sm:h-[120px] md:w-[240px] md:h-[140px] lg:w-[280px] lg:h-[160px]"
              />
            ))}
          </div>
        </div>
      )}

      {creditsData?.cast?.length > 0 && (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Cast
          </h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
            {creditsData.cast.slice(0, 15).map((person: any) => (
              <div
                key={person.id}
                className="w-[140px] md:w-[160px] flex-shrink-0 bg-gray-100 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  onClick={() => {
                    navigate(`/actor/${person.id}`);
                    window.scrollTo({ top: 0 });
                  }}
                  src={IMAGE_URL + person.profile_path}
                  alt={person.original_name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate text-black dark:text-white">
                    {person.original_name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {person.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SIMILAR MOVIES */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Similar Movies
        </h2>
        <MovieView data={similarData?.results?.slice(0, 8)} />
      </div>
    </div>
  );
};

export default React.memo(MovieDetail);
