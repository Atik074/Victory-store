import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./Style.css";
import Chevron from '../../components/svg/Chevron';
import { Collapse } from 'react-collapse';
import { useState } from 'react';
import {  Checkbox, FormGroup } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';



const Sidebar = () => {
    const [isOpenCategories , setIsOpenCategories ] = useState(true)
    const [isOpenAvailability , setIsAvailability ] = useState(true)
    const [isSize  ,setIsSize ] = useState(true)
  




    return (
        <div className="sidebar">
             <div className="flex items-center justify-between mt-8">
               <h2 className="text-[20px] font-medium">Product Categories</h2>
               <button onClick={()=>setIsOpenCategories(!isOpenCategories)}>
                  <Chevron/>
               </button>
            
                
             </div>
            <Collapse isOpened={isOpenCategories}>
            <div className="scroll  mt-4">
            <FormControl >
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                >
                    <FormControlLabel value="Man" control={<Radio />} label="Man" className='w-full' />
                    <FormControlLabel value="Woman" control={<Radio />} label="Woman" className='w-full' />
                    <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" className='w-full' />
                    <FormControlLabel value="Laptop" control={<Radio />} label="Laptop" />
                    <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
                    <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
                    <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
                    <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
                    <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
                </RadioGroup>
            </FormControl>
            </div>
          </Collapse>
           


     {/* for availability component start */}

             <div className="flex items-center justify-between mt-8">
               <h2 className="text-[20px] font-medium">Availabity</h2>
               <button onClick={()=>setIsAvailability(!isOpenAvailability)}>
                  <Chevron/>
               </button>
            
                
             </div>
            
             <Collapse isOpened={isOpenAvailability}>
             <div className="scroll mt-4">
            <FormControl >
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                >
                    <FormControlLabel value="Available" control={<Radio />} label="Available (15)" className='w-full' />
                    <FormControlLabel value="In Stock" control={<Radio />} label="In Stock (23)" className='w-full' />
                    <FormControlLabel value="Not Available" control={<Radio />} label="Not Available (0)" className='w-full' />
                  
                   
                   
                </RadioGroup>
            </FormControl>
            </div>
      </Collapse>
        
     {/* for availability component start end */}


     {/* for size component start start */}

     <div className="flex items-center justify-between mt-8">
               <h2 className="text-[20px] font-medium">Size </h2>
               <button onClick={()=>setIsSize(!isSize)}>
                  <Chevron/>
               </button>
            
                
             </div>
            
             <Collapse isOpened={isSize}>
             <div className="scroll mt-4">
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Small (10)" />
          <FormControlLabel control={<Checkbox />} label="Medium (11)" />
         <FormControlLabel  control={<Checkbox  />} label="Large (17)" />
         <FormControlLabel control={<Checkbox />} label="xl (43)" />
         <FormControlLabel control={<Checkbox />} label="xxl (19)" />
    
         
    </FormGroup>
            </div>
      </Collapse>
   
     {/* for size component end */}

     {/* filter price range component */}
     <div className="mt-8">
    <h2 className="text-[20px] font-medium mb-3">Filter By Price</h2>     
    <RangeSlider />
  </div>
    















            
        </div>
    );
};

export default Sidebar;
