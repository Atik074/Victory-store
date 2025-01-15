import "./Style.css";
import Sidebar from "./Sidebar";
import Chevron from "../../components/svg/Chevron";
import EqualBarSvg from "../../components/svg/EqualBarSvg";
import SquareSvg from "../../components/svg/SquareSvg";
import useProducts from "../../hooks/useProducts";
import MainContentArea from "./MainContentArea";
import { useState } from "react";
import ProductModal from "../products/ProductModal";



const ProductList = () => {
  const {products} = useProducts()
  const [inView, setInView] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);


  console.log("view" ,inView)

//  for modal
 const handleCloseModal = () => setShowModal(false);
 
 const handleOpenModal=(product)=>{
  setProduct(product)
  setShowModal(true)
     
 }



 
 
 
  return (
    <section className="relative ">
      {/* kaj baki ase  */}

      <div className="grid grid-cols-[250px,1fr] mt-12 container h-screen gap-20">
        <Sidebar />

        <div className="mainContent mt-8">
          <div className="bg-slate-100 flex items-center justify-between p-5 rounded">

            <div className="flex gap-x-6 ">
            <button
          onClick={()=>setInView(false)}
        className={`px-[13px] py-[4px] rounded transition-all ${inView === false ? "bg-blue-600 hover:bg-blue-700 text-white" :" text-black"} `}
      >
         <EqualBarSvg />
      </button>
            <button
                onClick={()=>setInView(true)}
                className={`px-[13px] py-[4px] rounded transition-all  ${inView  === true ? "bg-blue-600 hover:bg-blue-700 text-white" :" text-black"} `}
      >
         <SquareSvg />
      </button>
             
             
            </div>

            <div className="flex items-center w-[100px] h-10 px-2 hover:bg-[#dcdde1] rounded text-center gap-x-1">
              <h2 className="text-[20px] text-black">Show</h2>
              <button>
                <Chevron />
              </button>
            </div>
          </div>




          
     

      <div
         className={`mt-6  ${inView ? "grid grid-cols-4 gap-[19px]" :  ""}`}
          >

{products.slice(10, 20).map(product=>
<MainContentArea
           key={product.id}
           product={product}
           inView={inView}
           onOpenModal={handleOpenModal}
           />
           
           )}

      </div>

          <div className="absolute top-[10px] p-4 left-[220px] w-[80%] z-50">
        {
         showModal && <ProductModal 
         product={product}
          onCloseModal={handleCloseModal}
          />
       }
        </div>
     
        

        
        </div>
      </div>
    </section>
  );
};

export default ProductList;
