import React from 'react'
import { Button } from 'react-bootstrap'
import './LikeBtn.css'

function LikeBtn() {
    return (
        <div>
            <Button variant="outline-dark" value="Like" id="LikeBtn"><i class="far fa-heart"></i></Button>
            
        </div>
    )
}

export default LikeBtn
