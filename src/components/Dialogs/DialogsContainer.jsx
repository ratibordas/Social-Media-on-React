import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react'
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



// Redux compose
export default compose(
    //  react-redux connect
    connect(mapStateToProps,mapDispatchToProps),
    // HOC 
    withAuthRedirect)
    (Dialogs)
 










