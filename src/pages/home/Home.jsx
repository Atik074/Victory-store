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
                  <button>go product list</button>
            </Link>
          
            
        </div>
    );
};

export default Home;