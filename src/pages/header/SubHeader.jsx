
import { Link } from "react-router";
import AirplanSvg from "../../components/svg/AirplanSvg";
import BarSvg from "../../components/svg/BarSvg";
import DownSvg from "../../components/svg/DownSvg";
import { useState } from "react";
import CategoryPanel from "../categoryPanel/CategoryPanel";
import "./style.css"



const SubHeader = () => {
  const [isOpenDrawer , setIsOpenDrawer] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const handleCategoryPanel =()=>{
    setIsOpenDrawer(true)
  };


  return (
       <>
       
      <div className="container relative flex justify-between  text-xl bg-white  py-4 px-2">
        <div className="flex space-x-8">
          <button
           onClick={handleCategoryPanel}
           className="flex items-center">
            <BarSvg />
            <span className="mr-6 ml-2">Shop By Category</span>
            <DownSvg />
            <div className="border-r-2 border-[#9aa3b9] h-[22px] ml-3"></div>
          </button>

            <div>
              <ul className="flex space-x-9 subHeader">
             
               <Link to="/" className="hover:text-red-500 transition">  Home
               </Link>
              
                <Link 
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                to="/fashion" className="fashionMenu hover:text-red-500 transition">Fashion</Link>



        {  isVisible &&<div className=" absolute 
               bg-white border gap-12
                left-[350px] top-[60px] shadow-md flex w-1/2  h-[200px]  rounded">
         <div>
         <ul className="uldrop flex flex-col p-2 text-[18px] mx-3 space-y-1 ">
          <Link to="/" className="font-semibold">Apparel</Link>
          <Link to="/">Smart Tablet</Link>
          <Link to="/">Crepe  T-Shirt </Link>
          <Link to="/">Leather Watch</Link>
          <Link to="/">Rolling Diamond </Link>
         
          </ul>
         </div>
         <div>
         <ul className="flex flex-col p-2 text-[18px] mx-3 space-y-1 ">
          <Link to="/" className="font-semibold">OuterWear</Link>
          <Link to="/">Woodeen Chair </Link>
          <Link to="/">Sneakers Shoes </Link>
          <Link to="/">Purse </Link>
          <Link to="/">Xbox Controller </Link>
          
          </ul>
         </div>
         <div>
         <ul className="flex flex-col p-2 text-[18px] mx-3 space-y-1 ">
          <Link to="/" className="font-semibold">FootWear</Link>
          <Link to="/">Leather Watch </Link>
          <Link to="/">Cabinet Table </Link>
          <Link to="/">HeadPhones </Link>
          <Link to="">Sunglasses </Link>
          </ul>
         </div>

       
      </div>}




















                <Link to="/new-arrivals" className="hover:text-red-500 transition">New Arrivals</Link>
                <Link to="/all-brands" className="hover:text-red-500 transition">All Brands</Link>
                <Link to="/more" className="hover:text-red-500 transition">More</Link>
              </ul>
            </div>
        </div>

        <div className="flex gap-2 items-center">
          <AirplanSvg />
          <h2>Free International Delivery</h2>
        </div>
      </div>

    

          <CategoryPanel 
          isOpenDrawer={isOpenDrawer}
          setIsOpenDrawer={setIsOpenDrawer}
          />
      </>
  
  );
};

export default SubHeader;
