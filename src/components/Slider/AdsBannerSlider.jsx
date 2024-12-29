/* eslint-disable react/prop-types */

const AdsBannerSlider = ({title,img,price,buttonText}) => {
    return (
        <div className=" p-4 relative overflow-hidden">
            <img className=" rounded-md hover:scale-110 w-[450px]" src={img} alt="picture" />

            <div className=" absolute  w-[180px] top-14 right-6">
                <h3 className="text-[25px]  font-medium">{title}</h3>
                <p className="text-[19px] my-1 text-red-500 font-bold">{price}</p>
                <button className="font-medium hover:underline">{buttonText}</button>
            </div>
          
            
        </div>
    );
};

export default AdsBannerSlider;