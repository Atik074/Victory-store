import { Link } from "react-router";
import ShopSvg from "../../components/svg/ShopSvg";
import ProfileSvg from "../../components/svg/ProfileSvg";
import FavouriteSvg from "../../components/svg/FavouriteSvg";
import CartSvg from "../../components/svg/CartSvg";

const Header = () => {
  return (
 
      <div className="container flex justify-between items-center  text-xl bg-white px-2 py-3">
        <div className="flex">
          <Link to="/"><ShopSvg/></Link>
           <div className="ml-2">
            <h2 className=" mt-2 tracking-wider text-[24px] font-bold">Victory Store</h2>
            <p className="-mt-1 font-semibold text-[10px] tracking-[4px]">Big mega store</p>
            </div>
         
        </div>

        <div>
          <input 
           className=" appearance-none border rounded-md w-[310px]   py-2 px-3 text-gray-700 mr-3  text-[16px] focus:outline-none  focus:ring-1"
          type="text"
           placeholder="search products here..." 
           name="name" id="name" />
          <input className="bg-red-500 hover:bg-black cursor-pointer rounded-md text-white uppercase p-2 text-[16px]  w-28" type="submit" value="search" />
        </div>

        <div className="flex gap-2 items-center relative ">
          <FavouriteSvg/>
          <span className="hover:text-red-600">
              <CartSvg />
          </span>
        
          <ProfileSvg/>
         <div className="absolute bg-[#fc5c65] w-[18px] h-[19px] mx-auto bottom-[16px] left-[24px] text-center rounded-md text-sm text-white font-bold">0</div>
         <div className="absolute  bg-[#fc5c65] w-[18px] h-[19px] mx-auto bottom-[16px] left-[75px] text-center rounded-md text-sm text-white font-bold ">0</div>
        
      
          
        </div>
      </div>
  
  );
};

export default Header;
