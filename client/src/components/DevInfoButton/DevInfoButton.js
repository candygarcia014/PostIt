import React from 'react';
import { BsFillPlusSquareFill } from 'react-icons/fa';
import "./DevInfoButton.css";
import DevCard from './../DevCard/DevCard'; 



class DevInfoButton extends React.Component {
    state = { showing: true };
    
        render() {
        let { showing } = this.state;
            return (
            <button className="fa fa-plus-square" onClick={() => this.setState({ showing: !showing })}>
            { !showing 
                    ? <DevCard 
                    name={this.props.name}
                    github={this.props.github}
                    linkedin={this.props.linkedin} />
                    : null
                }
            </button>
      )
    }
  }


  

export default DevInfoButton;