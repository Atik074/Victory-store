import { useEffect, useState } from "react"

const useProducts =()=>{
    const [products , setProducts] = useState([])  
    const [isLoading , setIsLoading] = useState({
        state:false,
        message:""
    })
    const [isError , setIsError] = useState(null)
   


    const fetchProducts =async()=>{
        try{

            setIsLoading({
                ...isLoading ,
                 state:true,
                message:"product data is fetchig..."
            })
            setIsError(null)

             const productsResponse =await  fetch(`https://dummyjson.com/products`)

             const productsData =await productsResponse.json()
             setProducts(productsData.products)
           
            

        }catch(error){
            setIsError(error)

        }finally{
           setIsLoading({
                state: false,
                message: "",
              })
        }
    }


    useEffect(()=>{
        fetchProducts()
    },[])

   return{
     products,
     setProducts,
     isLoading ,
     isError ,
   
   } 


}

export default useProducts ;