import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';






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