import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {

  
// let state = props.store.getState();
    
  

   
    
//     const onSendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     }
    
//     const addMessage = (text) => {
//         props.store.dispatch(updateNewMessageActionCreator(text))
//     }


//     return (
//         <Dialogs addMessage={addMessage}
//             sendMessage={onSendMessage}
//             newMessageText={state.dialogsPage.newMessageText}
//             dialogsData={state.dialogsPage.dialogsData}
//             messagesData={state.dialogsPage.messagesData}


//         />
//     )

// }



// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
     }
}

// react-redux mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
      }
 }



//  react-redux connect
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)









export default DialogsContainer;