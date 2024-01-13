import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const President = () => {
    return (
        <section>
            <SectionTitle
            heading={"Ours Presidents"}
            subHeading={"They were presidents in different year"}
            ></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-16 mt-16"
      >
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/SJYJ16M/357391280-1509133399623070-3359849247026701068-n.jpg" alt="" />
                <p className='font-bold text-center md:text-2xl sm:text-sm mt-2'>Tuhfatu Alfi Shahareen</p>
                <p className='font-semibold text-center md:text-xl sm:text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem?</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/qDF06Nx/handsome-bearded-businessman-rubbing-hands-having-deal.jpg" alt="" />
                <p className='font-bold text-center md:text-2xl sm:text-sm mt-2'>Tuhfatu Alfi Shahareen</p>
                <p className='font-semibold text-center md:text-xl sm:text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem?</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/WtVCJmj/pexels-justin-shaifer-1222271.jpg" alt="" />
                <p className='font-bold text-center md:text-2xl sm:text-sm mt-2'>Tuhfatu Alfi Shahareen</p>
                <p className='font-semibold text-center md:text-xl sm:text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem?</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/dDq6nND/pexels-andrea-piacquadio-712513.jpg" alt="" />
                <p className='font-bold text-center md:text-2xl sm:text-sm mt-2'>Tuhfatu Alfi Shahareen</p>
                <p className='font-semibold text-center md:text-xl sm:text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem?</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/cxTxzLP/pexels-andrea-piacquadio-785667.jpg" alt="" />
                <p className='font-bold text-center md:text-2xl sm:text-sm mt-2'>Tuhfatu Alfi Shahareen</p>
                <p className='font-semibold text-center md:text-xl sm:text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem?</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </section>
    );
};

export default President;