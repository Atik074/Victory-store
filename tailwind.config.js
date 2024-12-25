/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        

      },
      
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
       
      },
      colors:{},
      fontFamily:{
        sans:["Poppins" ,"sans-serif"],
        Lora: ["Lora", "serif"]
      },
      container:{
        center:true ,
        padding:{
          DEFAULT:".5rem" ,
          
        }
      }
    },
  },
  plugins: [],
}