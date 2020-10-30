import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import  dialogsReducer  from '../reducers/dialogs-reducer';
import profileReducer from '../reducers/profile-reducer';
import usersReducer from  '../reducers/users-reducer'
import authReducer from "../reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk'
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

// redux chrome ext
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;