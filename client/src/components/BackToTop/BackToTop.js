import React from 'react';
import "./BackToTop.css"


const BackToTop = () => {
   return (
    <a href="#nav-bar" className="m-backtotop" aria-hidden="true">
        <div className="arrow">
            <i className="fa fa-arrow-up"></i>
        </div>
    </a>
)};



export default BackToTop;