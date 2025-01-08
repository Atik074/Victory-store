/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router";


const ProductCard = ({ product }) => {
  
  const { title, rating, brand,
     description, thumbnail, discountPercentage,
     price , availabilityStatus} = product;

     const [selectedSize, setSelectedSize] = useState(null);

     const sizes = ["S", "M", "L"];
   
     const handleSizeClick = (size) => {
       setSelectedSize(size);
     };



  return (
    <div className="w-3/4 h-[500px] transition-all duration-300 mx-auto bg-[#ffffff] border rounded-md shadow-lg px-4 my-2">
      <h2 className="text-[24px] font-semibold">{title}t</h2>
      <p className="text-[18px]">
        Brand: <span className="text-[19px]  font-medium ">{brand}</span>{" "}
      </p>
      <hr className="w-full border-[1px] " />

      <div className="mt-8 flex gap-12">
      <div className="imgWrapper  w-[100%] h-[280px] overflow-hidden relative">
       <Link to="/">
       <div className="h-[280px] border-[2px] rounded-md ">
       <img className=" w-full h-[280px]  transition-all duration-500 hover:scale-[1.1] hover:opacity-100"  
          src={product.thumbnail} alt="iamges" />

       </div>
       

  </Link>
          
          <div>
             <span 
             className="w-[45px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">{discountPercentage}%</span>
          
          </div>
          <div>
    
          </div>

      </div>

        <div className="textSide">
          <p className="text-[18px] font-semibold text-[#dc3545] mb-4">Price: ${price}</p>
          <span className="text-[14px] px-[8px] py-[2px] text-[#16b858] bg-[#e5f8ed] border rounded-[30px] font-semibold ">{
availabilityStatus}</span>
           <p className="my-4  text-[18px] leading-[28px] ">{description}</p>

          
          <div className="flex gap-2 items-center">
          <p className="text-[20px]">Size : </p>
      {sizes.map((size) => (
        <div
          key={size}
          className={`size ${selectedSize === size ? "selected" : ""} cursor-pointer w-10  h-9 p-1 border-[2px] border-gray-200 rounded  text-black text-center`}
          onClick={() => handleSizeClick(size)}
        >
        {size} 

        </div>  ))}
        </div>

          


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
