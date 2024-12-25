import { Link } from "react-router";

const DropDownMenuList = () => {
  return (
    <div
      id="dropDownMenu"
      className="absolute 
        bg-white border   left-[354px] top-[59px] 
         shadow-md grid grid-cols-3   rounded h-[370px] w-[55%] opacity-0"
    >
      <ul className=" flex flex-col p-2 text-[18px] mx-3 space-y-1 my-2 ">
        <Link to="/" className="font-semibold mb-2">
          Apparel
        </Link>
        <Link to="/">Smart Tablet</Link>
        <Link to="/">Crepe T-Shirt </Link>
        <Link to="/">Leather Watch</Link>
        <Link to="/">Rolling Diamond </Link>
      </ul>

      <ul className="flex flex-col p-2 my-2 text-[18px] mx-3 space-y-1 ">
        <Link to="/" className="font-semibold mb-2">
          OuterWear
        </Link>
        <Link to="/">Woodeen Chair </Link>
        <Link to="/">Sneakers Shoes </Link>
        <Link to="/">Purse </Link>
        <Link to="/">Xbox Controller </Link>
      </ul>

      <ul className="flex my-2 flex-col p-2 text-[18px] mx-3 space-y-1 ">
        <Link to="/" className="font-semibold mb-2">
          FootWear
        </Link>
        <Link to="/">Leather Watch </Link>
        <Link to="/">Cabinet Table </Link>
        <Link to="/">HeadPhones </Link>
        <Link to="">Sunglasses </Link>
      </ul>
      <div className="pb-2 ml-5  absolute bottom-3 ">
           <img className="h-[129px]" src="https://shorturl.at/IqHYT" alt="image"/>
      </div>
    </div>
  );
};

export default DropDownMenuList;
