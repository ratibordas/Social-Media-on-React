import  dialogsReducer  from '../reducers/dialogs-reducer';
import  profileReducer  from '../reducers/profile-reducer';

let store = {
  _state: {

    profilePage: {
      postsData: [{
        id: 1,
        text: "Hi, I am tired",
        likeCounts: 0
      }, ],
      newPostText: "Test render"
    },
    dialogsPage: {
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

  },
  getState() {
    
    return this._state;
  },
 
  // Render app
  _callSubscriber() {
    console.log("State has been changed!")
  },
  dispatch(action) {

   this._state.profilePage = profileReducer(this._state.profilePage, action)
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
   this._callSubscriber(this._state);

  //   switch (action.type) {
      
  //     case "ADD_POST": 
  //       let newPost = {
  //         id: Math.random(1 * 10),
  //         text: this._state.profilePage.newPostText,
  //         likeCounts: 0
  //       }
  //       this._state.profilePage.postsData.push(newPost);
  //       this._state.profilePage.newPostText = ""
  //       this._callSubscriber(this._state);
      
  //       break; 
      
  //     case "UPDATE_POST":
  //       this._state.profilePage.newPostText = action.newText;
  //       this._callSubscriber(this._state);
      
  //       break;
  //     case "UPDATE_NEW_MESSAGE":
  //       this._state.dialogsPage.newMessageText = action.newMessageText
  //       this._callSubscriber(this._state);
  //       break;
  //     case "SEND_MESSAGE":
  //       let messageBody = this._state.dialogsPage.newMessageText;
  //       this._state.dialogsPage.newMessageText = "";
  //       this._state.dialogsPage.messagesData.push({
  //       id: Math.random(1 * 10),
  //       text: messageBody
  //     })
  //       this._callSubscriber(this._state);
  //       break;
  //     default:
  //       return this._state
  // }
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }

}


// action types
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";




export const addPostActionCreator = () => {
    return {
       type: ADD_POST
    }
}

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}

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







export default store;