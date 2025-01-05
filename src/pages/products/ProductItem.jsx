import { Rating } from "@mui/material";
import { Link } from "react-router";


const ProductItem = () => {
 

    return (
      <div className="productItem border shadow-md  rounded-md overflow-hidden mb-12">
         <div className="imgWrapper w-[100%] h-[280px] overflow-hidden">
           <img className="w-full"  
             src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" />
         </div>
         <div className="px-3 my-3">
          <h3 className="hover:text-red-600 text-[#707171] text-[18px] mt-2">
            <Link to="/"> Initech space</Link>
            </h3>
            <p className="hover:text-red-600 font-[500] text-[19px] leading-7 my-2"> 
              <Link  to="/">Apple Smart Watch   Midnight Aluminum
              </Link>
              </p>
          <Rating name="size-small" defaultValue={3} size="small" />
              <p className="text-[18px] mt-1">$135</p>
         </div>
    
      </div>

    );
};

export default ProductItem;