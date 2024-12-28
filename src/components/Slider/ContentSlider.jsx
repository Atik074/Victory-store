import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation} from "swiper/modules";
import "./style.css"


const contentItems = [
  {
    id: "1",
    img: "http://surl.li/qhuvxh",
    title: "Smart Tablet",
  },
  {
    id: "2",
    img: "http://surl.li/kydats",
    title: "Creape T-Shirt",
  },
  {
    id: "3",
    img: "http://surl.li/wapskd",
    title: "Lather Watch",
  },
  {
    id: "4",
    img: "http://surl.li/xuoble",
    title: "Rolling Diamond",
  },
  {
    id: "5",
    img: "http://surl.li/hcmqaq",
    title: "Wooden Chairs",
  },
  {
    id: "6",
    img: "http://surl.li/hyohot",
    title: "Sneakers Shoes",
  },
  {
    id: "7",
    img: "http://surl.li/bkxlrj",
    title: "Purse",
  },
  {
    id: "8",
    img: "http://surl.li/roxenu",
    title: "Xbox Controller",
  }
];

const ContentSlider = () => {
  

  return (
   <div >
     <Swiper
      slidesPerView={6}
      spaceBetween={2}
      navigation={true}
      modules={[Navigation]}
       rewind={true}
      className="mySwiper container my-10"
    >
      {contentItems.map((item) => (
        <SwiperSlide ar key={item.id}>
          <div className="flex flex-col justify-center items-center bg-white w-[190px] h-[180px] border border-[#dcdde1] rounded-[8px] overflow-hidden">
            <img className="rounded-md relative" src={`${item.img}`} alt="" />
            <h3 className="absolute text-[18px] bottom-4 font-medium">
              {item.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default ContentSlider;
