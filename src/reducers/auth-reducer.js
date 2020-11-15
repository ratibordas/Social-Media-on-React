
import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { getFriendsThunkCreator } from './users-reducer'



// ACTION TYPES
const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA = "GET_CAPTCHA"

// DATA
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}



// REDUCER
const authReducer = (state = initialState, action) => {

    switch (action.type) {
         // 2 cases at the same time!!!
        case SET_USER_DATA:
        case GET_CAPTCHA:
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
export const getCaptcha = (captchaUrl) => {
    return {
        type: GET_CAPTCHA,
        payload: {captchaUrl}
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

export const loginningThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {

    const data = await authAPI.loginning(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
        dispatch(getFriendsThunkCreator());
    } else {
        if(data.resultCode === 10) {
           dispatch(getCaptchaUrlThunkCreator()) 
        }
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
export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    const data = await authAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptcha(captchaUrl));
}



export default authReducer;