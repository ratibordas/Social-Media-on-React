
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";


 const dialogsReducer = (state, action) => {

     switch (action.type) {
      case UPDATE_NEW_MESSAGE:
        state.newMessageText = action.newMessageText
       
        break;
      case SEND_MESSAGE:
        let messageBody = state.newMessageText;
        state.newMessageText = "";
        state.messagesData.push({
        id: Math.random(1 * 10),
        text: messageBody
      })
       
        break;
      default:
        return state
     }
     return state;
  }


export default dialogsReducer;
   
