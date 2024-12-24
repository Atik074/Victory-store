/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Xmark from '../../components/svg/Xmark';
import CategoryPanelList from './CategoryPanelList';



const CategoryPanel =({isOpenDrawer,setIsOpenDrawer})=> {
  

  const handleToggleDrawer = (newOpen) => () => {
      setIsOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
        <div className='flex items-center space-x-10'>
           <h3 className='font-medium text-xl m-4'>Shop By Categories</h3>
           <button onClick={handleToggleDrawer(false)}>
              <Xmark/>
           </button>
          
        </div>
        <hr/>
        <CategoryPanelList/>
      
    </Box>
  );

  return (
    <Drawer   open={isOpenDrawer}>
    {DrawerList}
  </Drawer>
  
  );
}


export default CategoryPanel ;