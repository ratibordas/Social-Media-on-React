import React from 'react';
import { Redirect } from 'react-router-dom';
import Contact from './Contact/Contact'
import "./Dialogs.scss";
import Message from './Message/Message';
import { reset,reduxForm, Field } from 'redux-form'
import { maxLengthValidator, requiredField } from '../../validators/validators';
import {TextareaComponent} from '../FormStuff/FormStuff'
// parent component
const Dialogs = (props) => {


   
    // Mapping
   
    let dialogsElements = props.dialogsData.map((contact) => {
        return <Contact key={contact.id} name={contact.name} id={contact.id} />
    });

    
    let messagesElements = props.messagesData.map((message) => {
          return <Message key={message.id} id={message.id} text={message.text} />
    })

    
    
  
    // submit callback
    const addNewMessage = (messageData) => {
        props.sendMessage(messageData.newMessageBody)
    }



     if(!props.isAuth) {
         return <Redirect to={"/login"}/>
     }
    return (
        <section className="dialogs">
            <aside className="dialogs__contact">
                <h2>Dialogs</h2>

                <ul>
                    {dialogsElements}
                </ul>
            </aside>
           <div className="dialogs__messages">
                <ul>
                   {messagesElements}        
                </ul>
                <AddMessagesReduxForm onSubmit={addNewMessage}  />

            </div>
        </section>
    )

}


const maxLength60 =  maxLengthValidator(60);
const AddMessageForm = (props) => {
    return (
        <form className="dialogs__messages__textarea" onSubmit={props.handleSubmit}>
        <Field  component={TextareaComponent} name={"newMessageBody"} placeholder={"Enter the message here"} validate={[requiredField,maxLength60]} />
        <button>Send</button>
     </form>
    )
}
// reset form field after submit
const afterSubmit = (result, dispatch) =>
  dispatch(reset("newMessagesForm"));

//redux-form HOC
const AddMessagesReduxForm = reduxForm({
    form: "newMessagesForm",
    onSubmitSuccess: afterSubmit
})(AddMessageForm)


export default Dialogs;