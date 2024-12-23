/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router";
import AirplanSvg from "../../components/svg/AirplanSvg";
import BarSvg from "../../components/svg/BarSvg";
import DownSvg from "../../components/svg/DownSvg";

export const headerMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Fashion",
    path: "/fashio",
  },
  {
    id: 3,
    title: "New Arrivals",
    path: "/new-arrivals",
  },
  {
    id: 4,
    title: "All Brands",
    path: "/all-brands",
  },
  {
    id: 5,
    title: "More",
    path: "/more",
  },
];

const SubHeader = () => {
  return (
    
      <div className="container flex justify-between  text-xl bg-white  py-4 px-2">
        <div className="flex space-x-8">
          <Link className="flex items-center">
            <BarSvg />
            <span className="mr-6 ml-2">Shop By Category</span>
            <DownSvg />
            <div className="border-r-2 border-[#9aa3b9] h-[22px] ml-3"></div>
          </Link>

          {headerMenu.map((item) => (
            <li
              className="list-none transition-colors duration-300 ease-in-out  hover:text-red-500"
              key={item.id}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <AirplanSvg />
          <h2>Free International Delivery</h2>
        </div>
      </div>
  
  );
};

export default SubHeader;
