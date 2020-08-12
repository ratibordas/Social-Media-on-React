
// ACTION TYPES
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

// DATA
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
      // UPD MESSAGE INTO DIALOGS PAGE
       case UPDATE_NEW_MESSAGE:
       
       // create and return new state obj right away
         return {
           ...state,
           newMessageText: action.newMessageText,
            
         }
   
       // SEND MESSAGE FROM DIALOGS PAGE
       case SEND_MESSAGE: 
         let messageBody = state.newMessageText;
    
         // create and return new state obj right away
         return {
           ...state,
           newMessageText: "",
           messagesData: [...state.messagesData,{id: Math.random(1 * 10),text: messageBody}]
         }
 
      default:
        return state
     }
     
  }


 // ACTION CREATORS
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
   
