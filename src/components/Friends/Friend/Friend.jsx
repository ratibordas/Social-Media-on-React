import React from 'react';
import "./Friend.scss";
import avatar from "../../../img/avatar.png";


const Friend = (props) => {

    return (
        <figure>
           <img src={avatar} alt="avatar"/>
            <figcaption>
               {props.name}
            </figcaption>
               
        </figure>
    )

}



export default Friend