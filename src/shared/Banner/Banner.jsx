// Import Swiper React components
import img1 from "../../assets/images/banner1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Slider from "../../components/Slider/Slider";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider img={img1} text={"banner text"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img1} text={"banner text"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img1} text={"banner text"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
