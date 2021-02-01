import React, {useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../TagsMobile/TagsMobile.css'


function TagsMobile() {
    const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);
  
    const handleChange = (val) => setValue(val);
  
    return (
      <ToggleButtonGroup size='sm' type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton className="tag-spacing" value={1}>SKIN</ToggleButton>
        <ToggleButton className="tag-spacing" value={2}>HAIR</ToggleButton>
        <ToggleButton className="tag-spacing" value={3}>BODY</ToggleButton>
        <ToggleButton className="tag-spacing" value={4}>MIND</ToggleButton>
        <ToggleButton className="tag-spacing" value={5}>STYLE</ToggleButton>
        <ToggleButton className="tag-spacing" value={6}>NAILS</ToggleButton>
      </ToggleButtonGroup>     
    );
  }

export default TagsMobile;