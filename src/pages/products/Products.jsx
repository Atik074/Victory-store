
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useProducts } from '../../hooks';
import ProductItem from './ProductItem';


const  Products =()=> {
  const [value, setValue] = useState(0);
  const {products} = useProducts()
  console.log(products)
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
 


  return (
    <div className='container'>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
      <div className='grid grid-cols-4 space-x-6 space-y-6'>
          {
            products.map(product =><ProductItem
             key={product.id}
             product={product}
            />
            )
          }
      </div>

    </div>
   
  );
}


export default Products;