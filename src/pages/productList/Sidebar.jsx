import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./Style.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="mb-6">PRODUCT CATEGORIES</h2>
            <div className="scroll">
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
            
        </div>
    );
};

export default Sidebar;
