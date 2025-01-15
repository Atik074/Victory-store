
import { ProductProvider } from "../../providers/ProductProvider";
import Banner from "../banner/Banner";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import Products from "../products/Products";


const Home = () => {
    

    return (
        <ProductProvider>
            <div className="shadow-md">
              <Header/>
                  <hr/>
              <SubHeader/>
            </div>
            <Banner/>
            <Products/>
            
        </ProductProvider>
    );
};

export default Home;