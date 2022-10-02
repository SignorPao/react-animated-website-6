import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";

const ClientSlider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {clients.map((client, index) => {
        // destructure client
        const { message, image, name, position, borderColor } = client;

        // slide
        return (
          <SwiperSlide key={index}>
            {/* card */}
            <div
              style={{ borderColor: borderColor }}
              className="w-full mx-auto lg:min-w-[300px] 2xl:min-w-[350px] h-[250px] rounded-[12px] border py-6 px-[30px] select-none border-t-[10px]"
            >
              {/* person message */}
              <div className="mb-[30px]">{message}</div>

              {/* person name, image & position */}
              <div className="flex gap-x-[10px]">
                <img src={image} alt="person" />
                <div className="font-bold">{name}</div>
                <div className="text-light">{position}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
