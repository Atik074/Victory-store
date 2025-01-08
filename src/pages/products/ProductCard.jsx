/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
    const {title , rating, brand ,description ,
        thumbnail} = product
    return (
        <div className="w-3/4 h-[500px] transition-all duration-300 mx-auto bg-[#ffffff] border rounded-md shadow-lg">
            <div className="px-4 my-2">
              <h2 className="text-[24px] font-semibold">{title}t</h2>
              <p className="text-[18px]">Brand: <span className="text-[19px]  font-medium ">{brand}</span> </p>
            </div>
            <hr className="w-full border-[1px]"/>
            

            <div>
              <div className="imageSide"></div>
              <div className="textSide"></div>
            </div>

          
            



        </div>
    );
};

export default ProductCard;