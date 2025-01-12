import "./Style.css";
import Sidebar from "./Sidebar";
import Chevron from "../../components/svg/Chevron";
import EqualBarSvg from "../../components/svg/EqualBarSvg";
import SquareSvg from "../../components/svg/SquareSvg";
import ProductItem from "../products/ProductItem";

const ProductList = () => {
  return (
    <section>
      {/* kaj baki ase  */}

      <div className="grid grid-cols-[250px,1fr] mt-12 container h-screen gap-20">
        <Sidebar />

        <div className="mainContent mt-8 ">
          <div className="bg-slate-100 flex items-center justify-between p-5 rounded">
            <div className="flex gap-x-6 ">
              <EqualBarSvg />
              <SquareSvg />
            </div>
            <div className="flex items-center w-[100px] h-10 px-2 hover:bg-[#dcdde1] rounded text-center gap-x-1">
              <h2 className="text-[20px] text-black">Show</h2>
              <button>
                <Chevron />
              </button>
            </div>
          </div>


          <ProductItem/>


        

        
        </div>
      </div>
    </section>
  );
};

export default ProductList;
