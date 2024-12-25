import { useState } from "react";
import { Link } from "react-router";
import AirplanSvg from "../../components/svg/AirplanSvg";
import BarSvg from "../../components/svg/BarSvg";
import DownSvg from "../../components/svg/DownSvg";
import CategoryPanel from "../categoryPanel/CategoryPanel";
import FashionMenuList from "./dropDownMenu/FashionMenuList";
import "./style.css";
import AllBrandMenulist from "./dropDownMenu/AllBrandMenulist";
import MoreMenuList from "./dropDownMenu/MoreMenuList";

const SubHeader = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleCategoryPanel = () => {
    setIsOpenDrawer(true);
  };

  return (
    <>
      <div className="container relative flex justify-between  text-xl bg-white  py-4 px-2">
        <div className="flex space-x-8">
          <button onClick={handleCategoryPanel} className="flex items-center">
            <BarSvg />
            <span className="mr-6 ml-2">Shop By Category</span>
            <DownSvg />
            <div className="border-r-2 border-[#9aa3b9] h-[22px] ml-3"></div>
          </button>

          <div>
            <ul className="flex space-x-9 ">
              <Link to="/" className="hover:text-red-500 transition">
                {" "}
                Home
              </Link>

              <Link
                to="/fashion"
                id="fashionMenu"
                className=" hover:text-red-500 transition"
              >
                Fashion
              </Link>
              <FashionMenuList />
              <Link
                to="/new-arrivals"
                className="hover:text-red-500 transition"
              >
                New Arrivals
              </Link>
              <Link id="allBrandMenu" to="/all-brands" className="hover:text-red-500 transition">
                All Brands
              </Link>
              <AllBrandMenulist/>
              <Link id="moreMenu" to="/more" className="hover:text-red-500 transition">
                More
              </Link>
              <MoreMenuList/>
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
