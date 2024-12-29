import Banner from "../banner/Banner";
import Header from "../Header/Header";
import SubHeader from "../header/SubHeader";
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
          
            
        </div>
    );
};

export default Home;