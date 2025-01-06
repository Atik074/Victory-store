import { Rating } from "@mui/material";
import { Link } from "react-router";
import HeartSvg from "../../components/svg/HeartSvg";
import ZoomSvg from "../../components/svg/ZoomSvg";
import "./Style.css"


const ProductItem = () => {
 

    return (
      <div className="productItem border shadow-md  rounded-md overflow-hidden mb-12">
         <div className="imgWrapper w-[100%] h-[280px] overflow-hidden relative">
           <img className="w-full"  
             src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" />
             
             <div>
                <span 
                className="w-[40px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[13px] font-semibold">-12%</span>
                <span 
                className="newStatus w-[40px] h-[20px] text-center rounded-sm bg-green-600   absolute top-[37px] left-[12px] text-white text-[14px] font-[600] opacity-0  transition-all ">new</span>
             </div>
             <div>
             <button  className="heartSvg w-[40px] h-[40px]  rounded-[100%]    absolute top-[25px] right-[12px]  text-black bg-white hover:bg-red-700 hover:text-white 
             opacity-0 transition-all ">
                    <HeartSvg/>
                </button>
             
                <button  className="zoomSvg w-[40px] h-[40px]  rounded-[100%]  absolute top-[75px] right-[12px] text-black bg-white  hover:bg-red-700 hover:text-white opacity-0 transition-all ">
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