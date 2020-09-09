import React from 'react';
import "./SinglePost.scss";


const SinglePost = (props) => {

    return (
        <li><span>{props.text}</span>
            <br/>
          <span>like : {props.likeCounts}</span>
        </li>
 )


}


export default SinglePost;