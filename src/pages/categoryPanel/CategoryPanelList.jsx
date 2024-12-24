import { useState } from "react";
import PlusSvg from "../../components/svg/PlusSvg";
import { Link } from "react-router";
import MinusSvg from "../../components/svg/MinusSvg";


const CategoryPanelList = () => {
  const [showSubMenu , setShowSubMenu] = useState(null)
  const [showInnerSubMenu , setShowInnerSubMenu] = useState(null)

  const handleSubMenu = (index)=>{
    if(showSubMenu === index){
      setShowSubMenu(null)
      setShowInnerSubMenu(null)
    }else{
      setShowSubMenu(index)
    }
  }

  const handleInnerSubMenu = (index)=>{
    if(showInnerSubMenu === index){
      setShowInnerSubMenu(null)
    }else{
      setShowInnerSubMenu(index)
    }
  }
  return (
    <div>
      <ul className="w-full">
        <li className="list-none flex items-center relative px-4 py-2">
          <Link to='/'
          onClick={()=>handleSubMenu(0)}
          className="w-full  text-[16px] text-left">Fashion
           
 
           {
            showSubMenu === 0 ?  <button 
            className=" absolute top-[15px] right-[10px]">
              <MinusSvg/>
            </button> : 
             <button 
             className="absolute top-[15px] right-[10px]">
               <PlusSvg />
             </button>
           }
         
         
          </Link>
          
         {
          showSubMenu === 0 && 
          <ul className="w-full absolute  top-[100%]  left-0 pl-9 my-2">
            <li className="list-none  relative">
              <Link to="/" className="w-full  transition text-[16px] text-left ">
                SubMneu

             {
              showInnerSubMenu === 0 ? 
               <button 
                onClick={()=>handleInnerSubMenu(0)}
               className=" absolute top-0 right-[10px]">
              <MinusSvg/>
            </button> : 
             <button 
             onClick={()=>handleInnerSubMenu(0)}
             className="absolute top-0 right-[10px]">
               <PlusSvg />
             </button>
           }
               
              </Link>

              {
                showInnerSubMenu === 0 && 
                <ul className="w-full absolute  top-[100%]  left-0 pl-2 my-2">
                <li className="list-none  relative">
                  <Link to="/" className="  text-[16px] text-left ">
                    children 1
                  </Link>
                </li>

                <li className="list-none  relative my-[1px]">
                  <Link to="/" className="  text-[16px] text-left ">
                    children 2
                  </Link>
                </li>
                <li className="list-none  relative my-[1px]">
                  <Link to="/" className="  text-[16px] text-left ">
                    children 3
                  </Link>
                </li>
              </ul>
              }
           
            
             


            </li>
          </ul>


         }
          
        </li>

        {/* { subMenu && <ul className="w-full">
               <li className="list-non  relative px-4 py-2">
                   subMenu
               </li>
             </ul>} */}

        {/*   */}
      </ul>
    </div>
  );
};

export default CategoryPanelList;
