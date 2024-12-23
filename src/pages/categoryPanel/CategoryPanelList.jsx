import PlusSvg from "../../components/svg/PlusSvg";

const CategoryPanelList = () => {
  return (
    <div>
      <ul className="w-full">
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Fashion</button>
          <PlusSvg />
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Jewellery</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Watches</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">OuterWear</button>
          <PlusSvg />
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Cosmetics</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Accessories</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Electronic</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Furniture</button>
        </li>

        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Sunglasses</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">
            Rolling Diamond
          </button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">
            Xbox Controller
          </button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">
            Leather Watch
          </button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Smart Tablet</button>
        </li>
        <li className="list-non flex items-center relative px-4 py-2">
          <button className="w-full   text-[16px] text-left">Purse</button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryPanelList;
