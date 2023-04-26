'use client'
import imgS_1 from '../../public/img/MainSlider/slide1.jpg';
import imgS_2 from '../../public/img/MainSlider/slide2.jpg';
import imgS_3 from '../../public/img/MainSlider/slide3.jpg';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Scrollbar,
   Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

const MainSlider = () => {
   return (
      <main>
         <section className=" container mx-auto px-5 mt-10 ">
            <Swiper
               modules={[Navigation,Pagination, Scrollbar]}
               spaceBetween={10}
               slidesPerView={1}
               navigation
               pagination
               autoplay={{ delay: 3000 }}
               scrollbar={{ draggable: true }}
               breakpoints={{
                  300: {
                     slidesPerView: 1,
                  },
                  600: {
                     slidesPerView: 1,
                  },
                  1024: {
                     slidesPerView: 1,
                  },
                  1280: {
                     slidesPerView: 1,
                  },
               }}
            >
                    <SwiperSlide>
                            <Image src={imgS_1} alt={'img_1'}/>
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image src={imgS_2} alt={'img_2'}/>
                     </SwiperSlide>
                     <SwiperSlide>
                            <Image src={imgS_3} alt={'img_3'}/>
                     </SwiperSlide>
            </Swiper>
         </section>
      </main>
   );
};

export default MainSlider;
