import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Button} from 'react-bootstrap'
import API from '../../utils/Api'
import decode from 'jwt-decode';


const LikeButton = (props) => {
    const [isLiked,setIsLiked] = useState(false);
    const [isLoading,setIsLoading] = useState(true);
    const [likeCheck,setLikeCheck] = useState(...props.liked)

    useEffect(()=>{
        setLikeCheck(props.liked);
    },[props.liked])
    
    useEffect(()=>{
        if(likeCheck){
            console.log(likeCheck.indexOf(props.id));
            if(likeCheck.indexOf(props.id) >= 0){
                setIsLiked(true);
            }  
        }        
    },[likeCheck]);

    useEffect(()=>{},[isLoading])


    
    const likePost = () =>{
        setIsLoading(true);
        const postId = props.id;
        const userId = props.curruser;
        let add = props.liked.concat(props.postId)
        try{
            API.updateLikes(userId, postId);
            props.setLiked(add);
            setIsLiked(true);
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }



    const unlikePost = () => {          
        setIsLoading(true);
        const postId = props.id;
        const userId = props.curruser;
        let remove = props.liked.splice(props.liked.indexOf(postId),1);
        console.log(postId, userId, remove)
        try{
            API.removeLike(userId, postId);
            props.setLiked(remove);
            setIsLiked(false);
            setIsLoading(false);
        } catch(err){
            console.log(err);
        }
    }


    return(
        <>
        {!isLiked ? 
        <Button variant="outline-dark" onClick={likePost}><i class="far fa-heart"></i></Button>:
        <Button variant="outline-dark" onClick={unlikePost}><i class="fas fa-heart"></i></Button>}
        </>
    )
}

export default LikeButton