
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../pages/products/ProductItem';



const ProductSlider = () => {
    return (
        <div className="productSlider">
   <Swiper  
           slidesPerView={5}
           spaceBetween={16}
           navigation={true}
           modules={[Navigation]}
            rewind={true}
           className="swiper-contents"
           >
       
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
       
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
        <SwiperSlide>  <ProductItem/> </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default ProductSlider;