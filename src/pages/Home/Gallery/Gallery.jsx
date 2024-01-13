import Aos from "aos";
/* Import AOS styles */
import 'aos/dist/aos.css';

import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Toys = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
        
    }, []);
    return (
        <div>
            <SectionTitle
            heading="DIIT IT Club Gallery"
            subHeading="Our Pictorial Representation"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">


        <img data-aos = "fade-right" className="w-[308px] h-[212px]" src="https://i.ibb.co/Cmj2mFb/2-E7-A0461-Copy.jpg" alt="" />
        <img data-aos = "fade-top" className="w-[308px] h-[212px]"  src="https://i.ibb.co/fGzbtjT/2-E7-A0667-Copy.jpg" alt="" />
        <img data-aos = "fade-top" className="w-[308px] h-[212px]" src="https://i.ibb.co/bz4X81x/2-E7-A0681-Copy.jpg" alt="" />
        <img data-aos = "fade-left" className="w-[308px] h-[212px]" src="https://i.ibb.co/X4QpdWS/2-E7-A0614-Copy.jpg" alt="" />
        <img data-aos = "fade-right" className="w-[308px] h-[212px]" src="https://i.ibb.co/hXb0yCW/2-E7-A0546-Copy.jpg" alt="" />
        <img className="w-[308px] h-[212px]" src="https://i.ibb.co/3FWmpfh/2-E7-A0319-Copy.jpg"  alt="" />
        <img className="w-[308px] h-[212px]" src="https://i.ibb.co/Xky5WKB/2-E7-A0002-Copy-2.jpg" alt="" />
        <img data-aos = "fade-left" className="w-[308px] h-[212px]" src="https://i.ibb.co/2PYC0LL/2-E7-A0612-Copy.jpg" alt="" />
        <img data-aos = "fade-right" className="w-[308px] h-[212px]" src="https://i.ibb.co/1v22196/2-E7-A0615-Copy.jpg"  alt="" />
        <img data-aos = "fade-bottom" className="w-[308px] h-[212px]" src="https://i.ibb.co/898sVwF/2-E7-A0009-Copy-Copy.jpg" alt="" />
        <img data-aos = "fade-bottom" className="w-[308px] h-[212px]" src="https://i.ibb.co/0CrjFFY/2-E7-A0653-Copy.jpg" alt="" />
        <img data-aos = "fade-left" className="w-[308px] h-[212px]" src="https://i.ibb.co/BK23mp3/2-E7-A0119-Copy.jpg" alt="" />

            </div>
        </div>
    );
};

export default Toys;