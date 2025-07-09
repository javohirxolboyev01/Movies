import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "@/const";
import { useMovie } from "@/api/hook/useMovies";
import { Image } from "antd";
import MovieView from "@/components/movies/MovieView";

const ActorDetail = () => {
  const { id } = useParams();
  const { getActorDetail, getActorCredits } = useMovie();

  const { data: actor } = getActorDetail(id || "");
  const { data: credits } = getActorCredits(id || "");

  const knownForMovies = credits?.cast?.slice(0, 8);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10">
        {/* LEFT: Image */}
        <div className="flex-shrink-0">
          <Image
            src={IMAGE_URL + actor?.profile_path}
            width={300}
            height={450}
            className="rounded-lg object-cover"
            alt={actor?.name}
            preview={false}
          />
        </div>

        {/* RIGHT: Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{actor?.name}</h1>

          {actor?.biography && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {actor.biography}
            </p>
          )}

          <div className="mt-4 space-y-2 text-sm">
            {actor?.birthday && (
              <p>
                <strong className="text-gray-600 dark:text-gray-400">
                  Born:
                </strong>{" "}
                {actor.birthday}
              </p>
            )}
            {actor?.place_of_birth && (
              <p>
                <strong className="text-gray-600 dark:text-gray-400">
                  Place:
                </strong>{" "}
                {actor.place_of_birth}
              </p>
            )}
            {actor?.known_for_department && (
              <p>
                <strong className="text-gray-600 dark:text-gray-400">
                  Known for:
                </strong>{" "}
                {actor.known_for_department}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Known For */}
      {knownForMovies?.length > 0 && (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Known For
          </h2>
          <MovieView data={knownForMovies} />
        </div>
      )}
    </div>
  );
};

export default React.memo(ActorDetail);
