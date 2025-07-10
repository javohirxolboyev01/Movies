import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "@/api/hook/useMovies";
import { IMAGE_URL } from "@/const";
import MovieView from "@/components/movies/MovieView";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieSingle, getMovieDetail } = useMovie();

  const { data } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  const { data: trailerData } = getMovieDetail(id || "", "videos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return null;

  return (
    <div className="bg-white text-black dark:bg-[#0d1117] dark:text-white min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {creditsData?.cast?.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
            {creditsData.cast.slice(0, 15).map((person: any) => (
              <div
                key={person.id}
                className="flex flex-col items-center text-center flex-shrink-0 cursor-pointer"
                onClick={() => {
                  navigate(`/actor/${person.id}`);
                  window.scrollTo({ top: 0 });
                }}
              >
                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 border-2 border-white">
                  <img
                    src={
                      person.profile_path
                        ? IMAGE_URL + person.profile_path
                        : "/no-image.jpg"
                    }
                    alt={person.original_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs md:text-sm mt-2 font-medium truncate w-[80px]">
                  {person.original_name}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md">
              <img
                src={IMAGE_URL + data.poster_path}
                alt={data.title}
                className="w-[200px] h-[300px] object-cover rounded-md shadow-md"
              />
              <div className="flex-1 text-sm space-y-2">
                <h1 className="text-2xl font-bold mb-4">
                  {data.title?.toUpperCase()}
                </h1>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="text-gray-500 dark:text-gray-400">Til:</div>
                  <div>Inglizcha</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Chiqqan sana:
                  </div>
                  <div>{data.release_date}</div>
                  <div className="text-gray-500 dark:text-gray-400">Janr:</div>
                  <div>{data.genres?.map((g: any) => g.name).join(", ")}</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Davomiyligi:
                  </div>
                  <div>{data.runtime} daqiqa</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Mamlakat:
                  </div>
                  <div>{data.production_countries?.[0]?.name}</div>
                  <div className="text-gray-500 dark:text-gray-400">IMDb:</div>
                  <div>{data.vote_average} / 10</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md leading-relaxed text-black dark:text-white/90 text-sm">
              <p>{data.overview}</p>
            </div>

            {trailerData?.results?.length > 0 && (
              <div className="bg-gray-100 dark:bg-[#161b22] text-black dark:text-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Official Trailer</h2>
                <iframe
                  src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                  className="w-full h-[320px] rounded-lg"
                  allowFullScreen
                />
              </div>
            )}

            {imagesData?.backdrops?.length > 0 && (
              <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Gallery</h2>
                <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
                  {imagesData.backdrops
                    .slice(0, 8)
                    .map((img: any, i: number) => (
                      <div
                        key={i}
                        className="w-[240px] h-[140px] flex-shrink-0 rounded-lg overflow-hidden"
                      >
                        <img
                          src={IMAGE_URL + img.file_path}
                          alt={`gallery-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="bg-gray-100 dark:bg-[#161b22] p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">O'xshash filmlar</h2>
              <MovieView data={similarData?.results?.slice(0, 8)} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-[#161b22] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Tasodifiy filmlar</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <img
                    src={IMAGE_URL + data.poster_path}
                    className="w-14 h-20 object-cover rounded"
                    alt=""
                  />
                  <div className="text-sm">
                    <p className="font-medium">{data.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Premyera
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieDetail);
