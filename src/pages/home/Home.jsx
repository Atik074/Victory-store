import Banner from "../banner/Banner";
import Header from "../Header/Header";
import SubHeader from "../header/SubHeader";

const Home = () => {
    return (
        <div>
            <div className="shadow-md">
              <Header/>
                  <hr/>
              <SubHeader/>
            </div>
            <Banner/>
          
            
        </div>
    );
};

export default Home;