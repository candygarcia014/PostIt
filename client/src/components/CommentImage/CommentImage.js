import React from "react";
import "../images/AvatarExample.jpg";
import "../CommentImage/CommentImage.css";

const Image = require("../images/AvatarExample.jpg");

function CommentImage() {
  return (
    <div>
      <img src={Image.default} className="card-img-top" alt="" />
      <Image src="holder.js/100px250" fluid />
    </div>
  );
}

export default CommentImage;
