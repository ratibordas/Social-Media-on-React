import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {

  
let state = props.store.getState();
    
  

    // Actions
    
    const onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    
    const addMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }


    return (
        <Dialogs addMessage={addMessage}
            sendMessage={onSendMessage}
            newMessageText={state.dialogsPage.newMessageText}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}


        />
    )

}



export default DialogsContainer;