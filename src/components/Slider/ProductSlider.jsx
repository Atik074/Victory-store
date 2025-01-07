import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../pages/products/ProductItem";
import useProducts from "../../hooks/useProducts";

const ProductSlider = () => {
  const { products } = useProducts();

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={16}
      navigation={true}
      modules={[Navigation]}
      rewind={true}
      className="swiper-contents"
    >
      {products.products?.slice(0, 10).map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem 
             key={product.id} 
          product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
