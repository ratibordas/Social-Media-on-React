import { sendMessage} from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';





// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        
     }
}

// react-redux mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return {
        
//         sendMessage: (newMessageBody) => {
//             dispatch(sendMessageActionCreator(newMessageBody))
//         }
//       }
//  }



// Redux compose
export default compose(
    //  react-redux connect
    connect(mapStateToProps,{sendMessage}),
    // HOC 
    withAuthRedirect)
    (Dialogs)
 










