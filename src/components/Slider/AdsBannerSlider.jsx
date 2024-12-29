/* eslint-disable react/prop-types */

const AdsBannerSlider = ({title,img,price,buttonText}) => {
    return (
        <div className="flex items-center justify-between overflow-hidden">
            <img className="w-[200px] transition-all rounded-md hover:scale-[1.3]  " src={img} alt="picture" />

            <div >
                <h3 className="text-[25px]  p-1 font-medium">{title}</h3>
                <p className="text-[22px] mb-1 text-red-500 font-bold">{price}</p>
                <button className="font-medium underline hover:no-underline">{buttonText}</button>
            </div>
          
            
        </div>
    );
};

export default AdsBannerSlider;