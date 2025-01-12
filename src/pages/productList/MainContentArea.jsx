/* eslint-disable react/prop-types */
import { Link } from "react-router";
import HeartSvg from "../../components/svg/HeartSvg";
import ZoomSvg from "../../components/svg/ZoomSvg";
import { Rating } from "@mui/material";

const MainContentArea = ({product ,inView}) => {



  return (

        <div
       
           className={`bg-[#f1f1f1]   hover:shadow-xl rounded-lg  transition-all ${inView ? "border-[#e6e1e1]  border-2" :"flex  items-center mb-6" } `}
          
        >
          <div 
           
          className={`imgWrapper    rounded-md  overflow-hidden relative ${inView ? "w-full mb-8 h-[210px]" : "w-[280px] h-[200px] border-[#e6e1e1]  border-2" }`}
          >
            <Link to="/">
              <div className="w-full h-full">
                <img
                  className="w-full h-full transition-all duration-500 hover:scale-[1.1] hover:opacity-100"
                  src={product.thumbnail}
                  alt="iamges"
                />
              </div>
            </Link>

            <div>
              <span className="w-[45px] h-[20px] text-center rounded-sm bg-red-500   absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">
                {product.discountPercentage}%
              </span>
            </div>
            <div>
              <button
                className={`heartSvg w-[40px] h-[40px]  rounded-[100%]    absolute  text-black 
                    bg-[#f1f2f6]
                     hover:bg-red-700 hover:text-white 
                    opacity-0 transition-all ${inView ? "top-[20px] left-[165px]" : "top-[30px] left-[228px] "}`}
              >
                <HeartSvg />
              </button>

              <button className={`zoomSvg w-[40px] h-[40px]  rounded-[100%]  absolute top-[80px] left-[235px]   text-black bg-[#f1f2f6]  hover:bg-red-700 hover:text-white opacity-0 transition-all 
                ${inView ? "top-[70px] left-[165px]" : "top-[80px] left-[228px] "}
                `}>
                <ZoomSvg />
              </button>
            </div>
          </div>
          <div className={`${inView ? "px-4" : "px-3 my-10"}`}>
            <p className={`hover:text-red-600 font-[500] transition-all text-[19px] leading-7 my-2  ${inView ?  "" : ""}`}>
              <Link to="/">{ inView ? `${product.title.slice(0,16)}...` : `${product.title}`}</Link>
            </p>
            <Rating
              name="size-small"
              defaultValue={product.rating}
              size="small"
              readOnly
            />
           
            <p className="text-[18px] mt-1 mb-4">Price : ${product.price}</p>
          </div>
        </div>
  
    
  );
};

export default MainContentArea;
