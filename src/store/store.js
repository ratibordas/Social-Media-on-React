import { createStore, combineReducers, applyMiddleware } from "redux";
import  dialogsReducer  from '../reducers/dialogs-reducer';
import profileReducer from '../reducers/profile-reducer';
import usersReducer from  '../reducers/users-reducer'
import authReducer from "../reducers/auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "../reducers/app-reducer";


// mix our reducers
let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;