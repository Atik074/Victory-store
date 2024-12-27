
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const ContentSlider = () => {
    return (
      <Swiper
      slidesPerView={6}
      spaceBetween={30}
      modules={[Navigation]} 
      className="mySwiper container my-10"
    >
      <SwiperSlide>
         <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
           <img className='rounded-md relative w-full h-full ' src="http://surl.li/qhuvxh" alt="" />
          <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
       
        </SwiperSlide>

      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/kydats" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
        
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/wapskd" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
         </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/xuoble" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
         </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/hcmqaq" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/hyohot" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/bkxlrj" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-col justify-center items-center bg-white w-[172px] h-[175px] border border-[#dcdde1] rounded-md overflow-hidden' >
      <img className='rounded-md relative'  src="http://surl.li/roxenu" alt="" />
      <h3 className='absolute text-[18px] bottom-4 font-medium'>Smart Tablet</h3>
         </div>
        </SwiperSlide>
   
     
    </Swiper>
    );
};

export default ContentSlider;