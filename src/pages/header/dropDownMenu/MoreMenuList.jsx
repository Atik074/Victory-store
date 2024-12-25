import { Link } from "react-router";

const MoreMenuList = () => {
  return (
    <div
      id="dropDownMenu"
      className="absolute 
          bg-white border right-80 top-[59px]
           shadow-md  rounded w-[15%] opacity-0"
    >
      <ul className="flex my-2 flex-col p-2 text-[18px] mx-3 space-y-1">
        <Link to="/">Best Deals</Link>
        <Link to="/">Blog</Link>
      </ul>
    </div>
  );
};

export default MoreMenuList;
