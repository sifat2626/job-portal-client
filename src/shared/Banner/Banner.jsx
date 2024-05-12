// Import Swiper React components
import img1 from "../../assets/images/banner1.jpg";
import img2 from "../../assets/images/carousel1.jpg";
import img3 from "../../assets/images/carousel3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Slider from "../../components/Slider/Slider";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
