import SubHeader from "../Header/SubHeader";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./Style.css"


const ProductList = () => {
    return (
        <section >
            {/* kaj baki ase  */}
            <SubHeader/>
         

          
             <div className="grid grid-cols-[250px,1fr] mt-12 container h-screen">
                <div className="sidebar ">
              <h2 className="mb-6">PRODUCT CATEGORIES</h2>
                   
            <FormControl>

            <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        
      >
        <FormControlLabel  value="Man" control={<Radio/>} label="Man" />
        <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
        <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
        <FormControlLabel value="Laptop" control={<Radio />} label="Laptop" />
        <FormControlLabel value="Camera" control={<Radio />} label="Camera" />
      </RadioGroup>
    </FormControl>
                                     

      
                </div>


                <div className="main "></div>
             </div>



        </section>
    );
};

export default ProductList;