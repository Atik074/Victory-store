import useProducts from "../../hooks/useProducts";


const ProductDetails = ({product}) => {
    const {products} = useProducts()
 

    console.log(products)

    return (
        <div className="container">
            product deatails page
            <div className="imgDiv">

            </div>
           
        </div>
    );
};

export default ProductDetails;