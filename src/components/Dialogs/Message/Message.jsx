import React from 'react'
import "./Message.scss"

const Message = (props) => {

    return (
        <li id={props.id}>
            <div className="dialogs__messages__avatar">
                <img src="" alt="" />
            </div>
            <span>{props.text}</span>
             <span>{props.likeCounts}</span>
        </li>
    )

}


export default Message;