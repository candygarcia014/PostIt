import React, {useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../Tags/Tags.css'


function Tags() {
    const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);
  
    const handleChange = (val) => setValue(val);

    
  
    return (
      // <ToggleButtonGroup size='sm' vertical={true} type="checkbox" value={value} onChange={handleChange}>
      //   <ToggleButton className="tag-spacing" value={1}>SKIN</ToggleButton>
      //   <ToggleButton className="tag-spacing" value={2}>HAIR</ToggleButton>
      //   <ToggleButton className="tag-spacing" value={3}>BODY</ToggleButton>
      //   <ToggleButton className="tag-spacing" value={4}>MIND</ToggleButton>
      //   <ToggleButton className="tag-spacing" value={5}>STYLE</ToggleButton>
      //   <ToggleButton className="tag-spacing" value={6}>NAILS</ToggleButton>
      // </ToggleButtonGroup>     

      <DropdownButton id="dropdown-basic-button" title="Filter By:" >
      <Dropdown.Header>Categories</Dropdown.Header>
      <Dropdown.Item href="#/action-1">Skin</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Hair</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Body</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Mind</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Style</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Nails</Dropdown.Item>
      </DropdownButton>
    );
  }

export default Tags;