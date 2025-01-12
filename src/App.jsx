import {  Routes,Route } from "react-router"
import Home from "./pages/home/Home"
import ProductList from "./pages/productList/ProductList"




function App() {

  return (
   
    <>
   <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<ProductList/>} path="product-list"/> 
      
     </Routes>
    </>
  
  
   
  )
}

export default App
