
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
 import ProductSlider from '../../components/Slider/ProductSlider';




const  Products =()=> {
  const [value, setValue] = useState(0);

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
 


  return (
   <div className='container mt-28'>

  
    <div className='flex items-center justify-between'>
      <div>
             <h3 className='text-[26px] font-semibold'>Popular Products</h3>
             <p className='text-[17px] text-[#57606f]'>Don&apos;t miss the current  offer untill the July</p>
      </div>
    
      <Box sx={{ maxWidth: { xs: 320, sm: 480, md:800 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab sx={{fontSize:15, fontWeight:600}} label="Fashions" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Electronics" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Bags" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Footwear" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Groceries" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Beauty" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Wellness" />
        <Tab sx={{fontSize:15, fontWeight:600}} label="Jewellery" />
      </Tabs>
      </Box>
     </div>
    
    
      <div className='mt-4'>
        <ProductSlider/> 
      
           
      </div>
    

    </div>
   
  );
}


export default Products;