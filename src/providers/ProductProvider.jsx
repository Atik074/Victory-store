/* eslint-disable react/prop-types */
import { ProductContext } from "../context";
import useProducts from "../hooks/useProducts";

export const ProductProvider = ({children}) => {
    const { products,setProducts, isLoading , isError} =useProducts([])
    return (
        <>
         <ProductContext.Provider value={{ products,setProducts, isLoading , isError}}>
            {children}
        </ProductContext.Provider>
        </>
       
    );
};
