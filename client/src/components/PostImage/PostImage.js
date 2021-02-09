import React from "react";
import '../images/AvatarExample.jpg';
import '../PostImage/PostImage.css'
const Image = require('../images/AvatarExample.jpg')


function PostImage(props) {
  return (
    <div>
      {/* STOCK IMAGE */}
      <img
        src={Image.default}
        className="PostImage"
        alt=""
        />
    <img src={props.image} className="PostImage" alt=""/>
    </div>
  );
}

export default PostImage;
