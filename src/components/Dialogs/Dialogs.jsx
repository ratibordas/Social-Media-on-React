import React from 'react';
import Contact from './Contact/Contact';
import "./Dialogs.scss";
import Message from './Message/Message';
import {updateNewMessageActionCreator, sendMessageActionCreator} from '../../store/state'



const Dialogs = (props) => {

// Data
    const store = props.store;
    const dialogsPage = props.store._state.dialogsPage;


    
    // Mapping
    let dialogsElements = dialogsPage.dialogsData.map((contact) => {
        return <Contact key={contact.id} name={contact.name} id={contact.id} />
    });

    
    let messagesElements = dialogsPage.messagesData.map((message) => {
          return <Message key={message.id} id={message.id} text={message.text} />
    })

    // Actions
    
    const onSendMessage = () => {
        store.dispatch(sendMessageActionCreator())
    }
    
    const addMessage = (e) => {
        store.dispatch(updateNewMessageActionCreator(e.target.value))
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
                <div className="dialogs__messages__textarea">
                    <textarea   onChange={addMessage} value={dialogsPage.newMessageText}></textarea>
                    <button  onClick={onSendMessage}>Send</button>
                 </div>

            </div>
        </section>
    )

}



export default Dialogs;