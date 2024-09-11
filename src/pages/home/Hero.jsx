import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.avif';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight ">
          Stateside Scoop: Worldwide Pulse in Real-Time
        </h1>
        <p className="py-4">
          Stay ahead with Stateside Scoop, your one-stop destination for
          breaking news, trending stories, and insightful analysis. Covering
          everything from politics and entertainment to tech and lifestyle, we
          deliver the most relevant updates across the nation. Join us as we
          explore the stories shaping Worldwide's present and future, keeping you
          informed and in the know, 24/7.
        </p>
      </div>

      <div className="md:w-1/2 w-full mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" className="w-full lg:h-[420px] sm:h-96 h-80"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" className="w-full lg:h-[420px] sm:h-96 h-80"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" className="w-full lg:h-[420px] sm:h-96 h-80"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" className="w-full lg:h-[420px] sm:h-96 h-80"/>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default Hero;
