import { Link } from "react-router";

const AllBrandMenulist = () => {
    return (
        <div
        id="dropDownMenu"
        className="absolute 
          bg-white border   left-[600px] top-[59px] 
           shadow-md   rounded w-[20%] h-80 opacity-0"
      >
        <ul className="flex my-2 flex-col p-2 text-[18px] mx-3 space-y-2 ">
          <Link to="/" >
            Gadget Zone
          </Link>
          <Link to="/">Initech Space </Link>
          <Link to="/">Loony Tunes </Link>
          <Link to="/">Massive Dynmic </Link>
          <Link to="">Pro Tech Gear</Link>
          <Link to="">Soylent Green </Link>
          <Link to="">The Simpsons</Link>
          <Link to="">Weeds Capital</Link>
         
        </ul>
       
      </div>
    );
};

export default AllBrandMenulist;