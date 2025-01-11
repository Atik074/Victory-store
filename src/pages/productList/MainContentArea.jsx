import { Link } from "react-router";
import useProducts from "../../hooks/useProducts";
import HeartSvg from "../../components/svg/HeartSvg";
import ZoomSvg from "../../components/svg/ZoomSvg";
import { Rating } from "@mui/material";

const MainContentArea = () => {
    const {products} = useProducts()
   
    console.log(products)
    return (
        <>
           {
            products.map(product =><div
                key ={product.id}  
            className="rounded-md border mt-8 flex  items-center gap-8  transition-all ">
  
                <div className="imgWrapper w-[430px] !h-[300px]   overflow-hidden relative border border-green-500">
                 <Link to="/">
                 <div className="w-full !h-[300px]  border border-red-500 ">
                 <img className="w-full !h-[300px]  transition-all duration-500 hover:scale-[1.1] hover:opacity-100"  
                    src={product.thumbnail} alt="iamges" />
          
                 </div>
                 
          
            </Link>
                    
                    <div>
                       <span 
                       className="w-[45px] h-[20px] text-center rounded-sm bg-red-500  z-50 absolute top-[12px] left-[12px] text-white text-[12px] p-[1px] font-semibold mb-1">{product.discountPercentage}%</span>
                       
                    </div>
                    <div>
                    <button  
                    
                    className="heartSvg w-[40px] h-[40px]  rounded-[100%]    absolute top-[25px] left-[210px]  text-black 
                    bg-[#f1f2f6]
                     hover:bg-red-700 hover:text-white 
                    opacity-0 transition-all ">
                           <HeartSvg/>
                       </button>
                    
                       <button  
                       
                       className="zoomSvg w-[40px] h-[40px]  rounded-[100%]  absolute top-[75px] left-[210px]   text-black bg-[#f1f2f6]  hover:bg-red-700 hover:text-white opacity-0 transition-all ">
                           <ZoomSvg/>
                       </button>
                    </div>
          
                </div>
                <div className="px-3 my-10">
                   <p className="hover:text-red-600 font-[500] transition-all text-[19px] leading-7 my-2"> 
                     <Link  to="/">{product.title}
                     </Link>
                     </p>
                 <Rating name="size-small" defaultValue={product.rating} size="small" readOnly />
                     <p className="text-[18px] mt-1 mr-8">{product.description.slice(0,100)}</p>
                     <p className="text-[18px] mt-1">Price : ${product.price}</p>
                </div>
           
               
             </div>)
           }
        </>
    );
};

export default MainContentArea;