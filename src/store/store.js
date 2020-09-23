import { createStore, combineReducers, applyMiddleware } from "redux";
import  dialogsReducer  from '../reducers/dialogs-reducer';
import profileReducer from '../reducers/profile-reducer';
import usersReducer from  '../reducers/users-reducer'
import authReducer from "../reducers/auth-reducer";
import thunkMiddleWare from 'redux-thunk'



// meld our reducers
let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
   auth: authReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;