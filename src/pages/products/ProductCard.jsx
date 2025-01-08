import { Link } from "react-router";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const {title , rating, brand ,description ,
        thumbnail ,discountPercentage} = product
    return (
        <div className="w-3/4 h-[500px] transition-all duration-300 mx-auto bg-[#ffffff] border rounded-md shadow-lg px-4 my-2">

              <h2 className="text-[24px] font-semibold">{title}t</h2>
              <p className="text-[18px]">Brand: <span className="text-[19px]  font-medium ">{brand}</span> </p>
            <hr className="w-full border-[1px] "/>


         <div className="mt-8">


        <div className="imgWrapper overflow-hidden relative">

        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>



       <Link to="/">
       <img className="transition-all duration-500 hover:scale-[1.3] hover:opacity-100 hover:border-red-500 hover:border rounded-md"  
          src={thumbnail} alt="iamges" /> 

       </Link>
          
             <span 
             className="w-[45px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">{discountPercentage}%</span>
         
           
        </div>



             <div className="textSide">

             </div>

        


            </div>

          
            



        </div>
    );
};

export default ProductCard;