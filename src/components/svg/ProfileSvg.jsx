import { useState } from "react";

const ProfileSvg = () => {
  const [hovered, setHovered] = useState(false);



    return (
      <div 
        onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer hover:text-red-500 transition " 
        
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
     
        {hovered && (
        <div className="absolute cursor-pointer text-black -right-12 top-2  text-center rounded-md text-sm  animate-fade-in font-bold">Sign In</div>
      )}
      </div>
      
    );
};

export default ProfileSvg;