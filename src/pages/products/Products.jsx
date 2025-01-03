
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useProducts } from '../../hooks';



const  Products =()=> {
  const [value, setValue] = useState(0);
  const {products} = useProducts()
  console.log(products)
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
 


  return (
    <div className='container flex items-center justify-between'>
      <div>
             <h3 className='text-[26px] font-semibold'>Popular Products</h3>
             <p className='text-[19px] text-[#57606f]'>Don&apos;t miss the current  offer untill the July</p>
      </div>
      <div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480, md:700 }, bgcolor: 'background.paper' }}>
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
       
      {/* <div className='grid grid-cols-4 mt-6 gap-6'>
          {
            products.map(product =><ProductItem
             key={product.id}
             product={product}
            />
            )
          }
      </div> */}

    </div>
   
  );
}


export default Products;