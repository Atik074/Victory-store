import {  Routes,Route } from "react-router"
import Home from "./pages/home/Home"




function App() {

  return (
    <div className="font-meriandaFont">
   <Routes>
        <Route element={<Home/>} path="/"></Route>
       
     </Routes>
    </div>
  
   
  )
}

export default App
