import {  Routes,Route } from "react-router"
import Home from "./pages/home/Home"
import ProductList from "./pages/productList/ProductList"




function App() {

  return (
    <div>
   <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<ProductList/>} path="/product-list"></Route>
       
     </Routes>
    </div>
  
   
  )
}

export default App
