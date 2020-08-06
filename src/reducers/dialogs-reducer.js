
// Action types
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";


let initialState = {
     dialogsData: [{
          id: 1,
          name: "Natasha"
        },
        {
          id: 2,
          name: "Dima"
        },
        {
          id: 3,
          name: "Anna"
        },
      ],
      messagesData: [{
        id: 1,
        text: "Message SOS"
      }, {
        id: 2,
        text: "Test Message"
      }],
      newMessageText: ""
}





 const dialogsReducer = (state = initialState, action) => {

     switch (action.type) {
      // upd message into Dialogs Page
       case UPDATE_NEW_MESSAGE:
        state.newMessageText = action.newMessageText
       
         break;
       // send message from Dialogs Page
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


// Action creators
export const updateNewMessageActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE,
      newMessageText: text
    }
}
export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
      
    }
}



export default dialogsReducer;
   
