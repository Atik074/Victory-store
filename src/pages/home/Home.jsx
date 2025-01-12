import { Link } from "react-router";
import Banner from "../banner/Banner";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import Products from "../products/Products";


const Home = () => {
    

    return (
        <div>
            <div className="shadow-md">
              <Header/>
                  <hr/>
              <SubHeader/>
            </div>
            <Banner/>
            <Products/>

            <Link to ="/product-list">
                  <button className="px-6 py-2 text-xl m-8 rounded text-white bg-red-700">go product list</button>
            </Link>
          
            
        </div>
    );
};

export default Home;