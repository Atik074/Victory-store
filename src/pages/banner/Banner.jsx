import AdsBannerSlider from "../../components/Slider/AdsBannerSlider";
import BannerSlider from "../../components/Slider/BannerSlider";
import ContentSlider from "../../components/Slider/ContentSlider";





const  Banner =()=> {
  return (
    <div>
      <div className=" bg-[#f5f5f5f7] py-2">
     <BannerSlider/>
     <ContentSlider/>
     </div>
      {/* free shipping */}
     <section className="container overflow-hidden flex items-center justify-between border-2 border-red-500  h-24  rounded-md  p-5 my-24">
        <div className="flex items-center space-x-2 ">
          <img className="h-[100px] scale-x-[-1]" src="https://i.pinimg.com/474x/0f/f8/ce/0ff8ce20452f671134de5af16dc7cbb1.jpg" alt="car" />
          <h2 className="text-3xl font-bold uppercase">Free Shipping </h2>
        </div>
         <p className="border h-10 border-r-[1px] border-[#dfe4ea]"></p>
        <p className="text-xl">Free Delivery Now On Your First Order and over $200</p>
        <p className="border h-10 border-r-[1px] border-[#dfe4ea]"></p>
        <h2 className="text-3xl font-bold uppercase">- Only $200*</h2>
     </section>

        <section  className="container grid grid-cols-3 gap-6 mb-12">
             
             <div className="bg-[#4bc9f3] rounded">
             <AdsBannerSlider 
            
            title="S22 Samsung Smartphone"
            img="https://rb.gy/3l3fuk"
            price="$250.00" 
            buttonText="SHOP NOW"
            />
             </div>
             <div className="bg-[#f0b343] rounded">
               <AdsBannerSlider 
               title="Armchair Mad By shopstic"
               img="http://surl.li/bmnwwn"
               price="$190.00" 
               buttonText="SHOP NOW"
               />
                 </div>
                <div className="bg-[#f49e49] rounded">
               <AdsBannerSlider 
               title="Noise Wireless Headphones"
               img="https://shorturl.at/X8FFY"
               price="$129.00" 
               buttonText="SHOP NOW"
               />

              </div>
        </section>

    </div>
   
  );
}

export default Banner;