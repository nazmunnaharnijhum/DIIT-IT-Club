
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
    return (

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="relative">
            <img  className="w-screen" src="https://i.ibb.co/2yXZBgc/2-E7-A0604-Copy.jpg"alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-screen" src="https://i.ibb.co/8KnNrkz/3-jpg.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Eternal love</p>
            <p className="uppercase">Live towards eternity</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-screen" src="https://i.ibb.co/vqxkLPZ/2E7A0697.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">The secret of your everyouth</p>
            <p>Lose yourself in ambience & atmosphere</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-screen" src="https://i.ibb.co/s6b45Lb/2-E7-A0467-Copy.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-screen" src="https://i.ibb.co/FXbsLK1/1-jpg.jpg" alt="" />
            <div className="absolute top-1/3 right-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
 
    );
};

export default Banner;