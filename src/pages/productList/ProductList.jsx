import SubHeader from "../Header/SubHeader";
import "./Style.css"
import Sidebar from "./Sidebar";


const ProductList = () => {
    return (
        <section className="border-4 border-red-600">
            {/* kaj baki ase  */}
            <SubHeader/>
         

          
             <div className="grid grid-cols-[250px,1fr] mt-12 container h-screen">
                <Sidebar/>


                <div className="main "></div>
             </div>



        </section>
    );
};

export default ProductList;