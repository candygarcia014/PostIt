import React from "react";
import '../images/AvatarExample.jpg';
import '../PostImage/PostImage.css'


function PostImage(props) {
  return (
    <div>
     
    <img src={props.image} className="PostImage" alt=""/>
    </div>
  );
}

export default PostImage;
