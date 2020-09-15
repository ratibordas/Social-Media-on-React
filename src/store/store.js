import { createStore, combineReducers } from "redux";
import  dialogsReducer  from '../reducers/dialogs-reducer';
import profileReducer from '../reducers/profile-reducer';
import usersReducer from  '../reducers/users-reducer'
import authReducer from "../reducers/auth-reducer";




// meld our reducers
let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
   auth: authReducer
})


let store = createStore(reducers);

export default store;