/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { Link } from "react-router";
import HeartSvg from "../../components/svg/HeartSvg";
import ZoomSvg from "../../components/svg/ZoomSvg";
import "./Style.css"



const ProductItem = ({product ,onHandleZoomProduct}) => {
    
 

    return (
      <div  className="shadow-md rounded-md border ">
  
      <div className="imgWrapper  w-[100%] h-[280px] overflow-hidden relative">
       <Link to="/">
       <div className="h-[280px]">
       <img className=" w-full h-[280px] transition-all duration-500 hover:scale-[1.1] hover:opacity-100"  
          src={product.thumbnail} alt="iamges" />

       </div>
       

  </Link>
          
          <div>
             <span 
             className="w-[45px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">{product.discountPercentage}%</span>
             <span 
             className="newStatus   p-1 text-center rounded-sm bg-green-600   absolute top-[37px] left-[12px] text-white text-[12px] font-[600] opacity-0  transition-all ">{product.
              availabilityStatus}</span>
          </div>
          <div>
          <button  
          
          className="heartSvg w-[40px] h-[40px]  rounded-[100%]    absolute top-[25px] right-[12px]  text-black 
          bg-[#f1f2f6]
           hover:bg-red-700 hover:text-white 
          opacity-0 transition-all ">
                 <HeartSvg/>
             </button>
          
             <button  
               onClick={() =>onHandleZoomProduct(product)}
             className="zoomSvg w-[40px] h-[40px]  rounded-[100%]  absolute top-[75px] right-[12px] text-black bg-[#f1f2f6]  hover:bg-red-700 hover:text-white opacity-0 transition-all ">
                 <ZoomSvg/>
             </button>
          </div>

      </div>
      <div className="px-3 my-3">
       <h3 className="hover:text-red-600 transition-all text-[#707171] text-[18px] mt-2">
         <Link to="/"> Initech space</Link>
         </h3>
         <p className="hover:text-red-600 font-[500] transition-all text-[19px] leading-7 my-2"> 
           <Link  to="/">Apple Smart Watch   Midnight Aluminum
           </Link>
           </p>
       <Rating name="size-small" defaultValue={4} size="small" readOnly />
           <p className="text-[18px] mt-1">$135</p>
      </div>
 
     
   </div>

    );
};

export default ProductItem;