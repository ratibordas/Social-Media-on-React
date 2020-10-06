
// ACTION TYPES
const SEND_MESSAGE = "SEND_MESSAGE";


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
      
}


 


 const dialogsReducer = (state = initialState, action) => {
   
  
   

     switch (action.type) {
      
       // SEND MESSAGE FROM DIALOGS PAGE
       case SEND_MESSAGE: 
         let messageBody = action.newMessageBody;
         return {
           ...state,
           messagesData: [...state.messagesData,{id: Math.random(1 * 10),text: messageBody}]
         }
 
      default:
        return state
     }
     
  }


 // ACTION CREATORS

export const sendMessage = (newMessageBody) => {
    return {
      type: SEND_MESSAGE,
      newMessageBody
      
    }
}



export default dialogsReducer;
   
