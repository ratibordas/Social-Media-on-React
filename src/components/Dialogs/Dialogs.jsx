import React from 'react';
import Contact from './Contact/Contact'
import "./Dialogs.scss";
import Message from './Message/Message';




const Dialogs = (props) => {


   
    // Mapping
   
    let dialogsElements = props.dialogsData.map((contact) => {
        return <Contact key={contact.id} name={contact.name} id={contact.id} />
    });

    
    let messagesElements = props.messagesData.map((message) => {
          return <Message key={message.id} id={message.id} text={message.text} />
    })

    // Actions
    
    const onSendMessage = () => {
        props.sendMessage()
    }
    
    const onAddMessage = (e) => {
        props.addMessage(e.target.value)
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
                    <textarea   onChange={onAddMessage} value={props.newMessageText}></textarea>
                    <button  onClick={onSendMessage}>Send</button>
                 </div>

            </div>
        </section>
    )

}



export default Dialogs;