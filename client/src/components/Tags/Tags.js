import React, {useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../Tags/Tags.css'
import API from '../../utils/Api'


function Tags(props) {
    const [value, setValue] = useState([1, 2, 3, 4, 5, 6]);
  
    const handleChange = (val) => setValue(val);

    const tagSearch = (e) => {
      e.preventDefault();
      API.searchByTag(e).then(res=>{
        console.log(res);
        props.setData(res.data)})
    }
  
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
      <Dropdown.Item onClick={tagSearch} value="Skin">Skin</Dropdown.Item>
      <Dropdown.Item onClick={tagSearch} value="Hair">Hair</Dropdown.Item>
      <Dropdown.Item onClick={tagSearch} value="Body">Body</Dropdown.Item>
      <Dropdown.Item onClick={tagSearch} value="Mind">Mind</Dropdown.Item>
      <Dropdown.Item onClick={tagSearch} value="Style">Style</Dropdown.Item>
      <Dropdown.Item onClick={tagSearch} value="Nails">Nails</Dropdown.Item>
      </DropdownButton>
    );
  }

export default Tags;