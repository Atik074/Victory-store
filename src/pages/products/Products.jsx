import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import useProducts from "../../hooks/useProducts";


const Products = () => {
  const [value, setValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { products, isLoading, isError } = useProducts()
  const [product, setProduct] = useState(null);



  //handle Modal Products
  const handleOpenModal = (product) => {
    setShowModal(true);
    setProduct(product);
  };
  //handle close Modal Products
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 




  //for data hanlde
  if (isLoading.state)
    return (
      <p className="text-3xl text-red-700">
        Data is loading :{isLoading.message}
      </p>
    );
  if (isError)
    return <p className="text-3xl text-red-700">Error is : {isError}</p>;

  return (
    <div className="container mt-28 relative">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[26px] font-semibold">Popular Products</h3>
          <p className="text-[17px] text-[#57606f]">
            Don&apos;t miss the current offer untill the July
          </p>
        </div>

        <Box
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 800 },
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Fashions" />
          
            <Tab 
               
            sx={{ fontSize: 15, fontWeight: 600 }} label="Electronics" />
          

            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Bags" />
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Footwear" />
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Groceries" />
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Beauty" />
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Wellness" />
            <Tab sx={{ fontSize: 15, fontWeight: 600 }} label="Jewellery" />
          </Tabs>
        </Box>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        navigation={true}
        modules={[Navigation]}
        rewind={true}
        className="swiper-contents"
      >
        {products?.slice(0, 10)?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} onOpenModal={handleOpenModal} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <div
          className="w-full px-6  top-0
        z-10 absolute"
        >
          <ProductModal product={product} onCloseModal={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default Products;
