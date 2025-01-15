import {  Routes,Route } from "react-router"
import Home from "./pages/home/Home"
import ProductList from "./pages/productList/ProductList"
import ProductDetails from "./pages/productDetails/ProductDetails"




function App() {

  return (
   
    <>
   <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<ProductList/>} path="/product-list"/> 
        <Route element={<ProductDetails/>} path="/product/:id"/> 
      
     </Routes>
    </>
  
  
   
  )
}

export default App
