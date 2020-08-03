import React from 'react'
import { Link } from 'react-router-dom';
import "./Contact.scss";






const Contact = (props) => {

    return ( 
        <Link to={`/dialogs/${props.id}`}><li>{props.name}</li></Link>      
    )

}


export default Contact;