
import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'



// ACTION TYPES
const SET_USER_DATA = "SET_USER_DATA"


// DATA
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}



// REDUCER
const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}


// ACTION CREATORS
export const setAuthUserData = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    }
}
// THUNKS

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    const data = await authAPI.getMyProfile()
    if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const loginningThunkCreator = (email, password, rememberMe) => async (dispatch) => {

    const data = await authAPI.loginning(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Nope. Something incorrectly";
        // call redux-form stopSubmit
        dispatch(stopSubmit("login", { _error: message }))
    }

}

export const logoutThunkCreator = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));

    }

}

export default authReducer;