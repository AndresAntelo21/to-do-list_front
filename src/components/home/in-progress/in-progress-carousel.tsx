import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "@/index.css";
import { InProgressCard } from "./in-progress-card";


export const InProgressCarousel = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            loop={true}
            className="w-full h-55"
        >
            <SwiperSlide>
                <InProgressCard />
            </SwiperSlide>
            <SwiperSlide>
                <InProgressCard />
            </SwiperSlide>
            <SwiperSlide>
                <InProgressCard />
            </SwiperSlide>
        </Swiper>
    );
};