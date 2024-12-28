import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const BannerSlider = () => {
    return (
        <Swiper 
        navigation={true}
        spaceBetween={20}
       
         modules={[Navigation]} className="container   w-full h-full">
         <SwiperSlide  className='flex items-center content-center bg-[#fff] text-[18px] text-center'>
                <div className='overflow-hidden'>
                <img className='w-full  h-[430px] rounded-md block object-cover' src="https://shorturl.at/gZOaC" alt="" />
                </div>
           
  
          </SwiperSlide>
          <SwiperSlide className='flex items-center content-center bg-[#fff] text-[18px] text-center '>
              <div className="overflow-hidden">
                <img className='w-full h-[430px] rounded-md block object-cover'  src="https://shorturl.at/AJh2m" alt="" />
              </div>
           
          </SwiperSlide>
          <SwiperSlide className='flex items-center content-center bg-[#fff] text-[18px] text-center '>
              <div className="overflow-hidden">
                <img className='w-full h-[430px] rounded-md block object-cover'  src="https://shorturl.at/AJh2m" alt="" />
              </div>
           
          </SwiperSlide>
          <SwiperSlide className='flex items-center content-center bg-[#fff] text-[18px] text-center '>
              <div className="overflow-hidden">
                <img className='w-full h-[430px] rounded-md block object-cover'  src="https://shorturl.at/AJh2m" alt="" />
              </div>
           
          </SwiperSlide>
          <SwiperSlide className='flex items-center content-center bg-[#fff] text-[18px] text-center'>
              <div className="overflow-hidden">
                <img className='w-full h-[430px] rounded-md block object-cover'  src="https://shorturl.at/AJh2m" alt="" />
              </div>
           
          </SwiperSlide>
         
        </Swiper>
    );
};

export default BannerSlider;