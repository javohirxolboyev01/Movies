import React, { useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../style/swiper-custom.css";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";

interface Props {
  data: IMovie[];
}

const HeroSlider: FC<Props> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pb-8">
      <div className="px-4 max-w-[1360px] mx-auto">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-[600px] rounded-b-2xl overflow-hidden"
        >
          {data?.map((movie: IMovie) => (
            <SwiperSlide key={movie.id} className="relative">
              <img
                src={IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {movie.title}
                </h2>
                <p className="text-sm md:text-base mb-4 text-gray-300">
                  {movie.release_date?.split("-")[0]} •{" "}
                  {movie.original_language?.toUpperCase()} • ⭐{" "}
                  {movie.vote_average?.toFixed(1)}
                </p>
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 hover:text-white transition-colors">
                  Watch Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[3px] flex justify-center">
          <Swiper
            modules={[Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={3}
            watchSlidesProgress
            loop
            className="w-full max-w-[750px] h-[70px]"
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {data?.map((movie, index) => (
              <SwiperSlide
                key={movie.id}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ${
                    index === activeIndex ? "" : "bg-black/80"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSlider);
