import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "@/api/hook/useMovies";
import { IMAGE_URL } from "@/const";
import MovieView from "@/components/movies/MovieView";

import noPicture from "@/assets/Logo/Logo.png";
import { Image } from "antd";

const MovieDetail = () => {
  useEffect(() => {
    document.title = "MovieDetail | Movies";
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieSingle, getMovieDetail } = useMovie();

  const { data } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  const { data: trailerData } = getMovieDetail(id || "", "videos");

  if (!data) return null;

  return (
    <div className="bg-white text-white dark:bg-[#0d1117] dark:text-white min-h-screen">
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={data?.backdrop_path ? IMAGE_URL + data.backdrop_path : noPicture}
          alt="Backdrop"
          className={`object-cover ${
            data?.backdrop_path ? "w-full h-full" : "w-150 h-58 mx-auto"
          } brightness-[.35]`}
        />
        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start px-6 md:px-16 pb-10 md:pb-0">
          <div className="text-center md:text-left text-white max-w-2xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              {data.title}
            </h1>
            {data.tagline && (
              <p className="text-base md:text-lg italic text-gray-300 drop-shadow">
                {data.tagline}
              </p>
            )}
            <div className="flex gap-4 text-sm md:text-base text-gray-300 justify-center md:justify-start">
              <span>{data.release_date}</span>
              <span>{data.runtime} min</span>
              <span>IMDb {data.vote_average.toFixed(1)} / 10</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {data.genres?.map((genr: any) => (
                <span
                  key={genr.id}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {genr.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md text-sm leading-relaxed text-black dark:text-white/90">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p>{data.overview}</p>
        </div>

        {creditsData?.cast?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Cast</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
              {creditsData.cast.slice(0, 15).map((person: any) => (
                <div
                  key={person.id}
                  className="w-[90px] flex-shrink-0 text-center cursor-pointer"
                  onClick={() => navigate(`/actor/${person.id}`)}
                >
                  <img
                    src={
                      person.profile_path
                        ? IMAGE_URL + person.profile_path
                        : "https://avatars.mds.yandex.net/i?id=c56c58f8712aa808e80dae75d175c8c79b8d920b-16315638-images-thumbs&n=13"
                    }
                    className="w-20 h-20 mx-auto object-cover rounded-full border-2 border-white"
                    alt={person.original_name}
                  />
                  <p className="text-xs mt-2">{person.original_name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {trailerData?.results?.length > 0 && (
          <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Official Trailer</h2>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {imagesData?.backdrops?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
              {imagesData.backdrops.slice(0, 8).map((img: any, i: number) => (
                <div
                  key={i}
                  className="w-[260px] h-[150px] flex-shrink-0 overflow-hidden rounded-lg"
                >
                  <Image
                    src={IMAGE_URL + img.file_path}
                    alt={`gallery-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {similarData?.results?.length > 0 && (
          <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">O'xshash filmlar</h2>
            <MovieView data={similarData.results.slice(0, 10)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(MovieDetail);
