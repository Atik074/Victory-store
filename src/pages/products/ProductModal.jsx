/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import CartSvg from "../../components/svg/CartSvg";
import Xmark from "../../components/svg/Xmark";

const ProductModal = ({ product, onCloseModal }) => {
  const {
    title,
    rating,
    brand,
    description,
    thumbnail,
    discountPercentage,
    price,
    availabilityStatus,
  } = product;

  const [selectedSize, setSelectedSize] = useState(null);
  const [countProduct, setCountProduct] = useState(1);

  // handle  increase or decrease  product in cart
  const handleIncreaseProduct = () => setCountProduct(countProduct + 1);
  const handleDecreaseProduct = () => setCountProduct(countProduct - 1);

  // for product sizes
  const sizes = ["S", "M", "L"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-[80%] h-[500px]  transition-all duration-300 mx-auto bg-[#ffffff] border rounded-md shadow-lg px-4 my-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[24px] font-semibold">{title}t</h2>
          <p className="text-[18px]">
            Brand: <span className="text-[19px]  font-medium ">
            {brand || "Mixed"}
              </span>{" "}
          </p>
        </div>
        <button className=" " onClick={onCloseModal}>
          <Xmark />
        </button>
      </div>
      <hr className="w-full border-[1px] " />

      <div className="mt-8 flex gap-12">
        <div className="imgWrapper  w-[60%] h-[300px] overflow-hidden relative">
          <div className="h-full border-[2px] rounded-md ">
            <img
              className=" w-full h-full  transition-all duration-500 hover:scale-[1.3] hover:opacity-100"
              src={product.thumbnail}
              alt="iamges"
            />
          </div>

          <div>
            <span className="w-[45px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">
              {discountPercentage}%
            </span>
          </div>
        </div>

        <div className="textSide">
          <p className="text-[18px] font-semibold text-[#dc3545] mb-4">
            Price: ${price}
          </p>
          <span className="text-[14px] px-[8px] py-[2px] text-[#16b858] bg-[#e5f8ed] border rounded-[30px] font-semibold ">
            {availabilityStatus}
          </span>
          <p className="my-4  text-[18px] leading-[28px] ">{description}</p>

          <div className="flex gap-2 items-center">
            <p className="text-[20px]">Size : </p>
            {sizes.map((size) => (
              <div
                key={size}
                className={`size ${
                  selectedSize === size ? "selected" : ""
                } cursor-pointer w-10  h-9 p-1 border-[2px] border-gray-200 rounded  text-black text-center`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="flex gap-x-10  my-6">
            <div className="flex gap-x-5    items-center   justify-between">
              <button
                onClick={handleDecreaseProduct}
                className="w-11 h-11 border border-[#0000001a]  rounded-[50%]  bg-[#edeef5] hover:bg-[#0000001a] text-[30px] font-[500]"
                disabled={countProduct === 1}
              >
                -
              </button>
              <p className=" w-10 h-10 text-center p-2 text-[22px] font-[500]">
                {countProduct}
              </p>

              <button
                onClick={handleIncreaseProduct}
                className="w-11 h-11 border border-[#0000001a]  rounded-[50%]  bg-[#edeef5] hover:bg-[#0000001a] text-[30px] font-[500]"
              >
                +
              </button>
            </div>
            <button className="flex  items-center rounded-e-3xl rounded-s-3xl   hover:bg-[#0000001a] text-center text-[#fff] text-[20px]  hover:bg-[#53348c] bg-[#dc3545]  pr-5 pl-2 py-[7px]">
              <CartSvg />
              <span className="-ml-2">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
