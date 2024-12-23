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
    <Box sx={{ width: 300 }} role="presentation" onClick={handleToggleDrawer(false)}>
        <div className='flex items-center space-x-10'>
           <h3 className='font-medium text-xl m-4'>Shop By Categories</h3>
           <Xmark/>
        </div>
        <hr/>
        <CategoryPanelList/>
      
    </Box>
  );

  return (
    <div>
     
      <Drawer open={isOpenDrawer} onClose={handleToggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


export default CategoryPanel ;