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

  return (
    <div className="pb-8">
      <div className=" px-4">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full max-w-[1360px] h-[600px] mx-auto mb-6"
        >
          {data?.map((movie: IMovie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={6}
          spaceBetween={12}
          watchSlidesProgress
          loop
          className="w-full max-w-[860px] h-[108px] mx-auto "
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {data?.map((movie) => (
            <SwiperSlide key={movie.id} className=" overflow-hidden rounded-md ">
              <img
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className="container mx-auto w-full h-full object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default React.memo(HeroSlider);
