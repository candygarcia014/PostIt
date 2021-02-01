import React from 'react'
import '../images/AvatarExample.jpg';
import '../ProfileCard/ProfileCard.css'
const AvatarImage = require('../images/AvatarExample.jpg')
function Avatar(props) {
    return (
        <>
            <div className="AvatarImage">
                {/* STOCK IMAGE */}
                {/* <img
                src={AvatarImage.default}
                className="card-img-top"
                alt=""
                /> */}
                {/* IMAGE FROM S3, NEEDS HELP */}
                <img src={props.image} className="card-img-top"
                alt=""/>
            </div>
        </>
    )
}
export default Avatar