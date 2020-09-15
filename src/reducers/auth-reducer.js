// ACTION TYPES
const SET_USER_DATA = "SET_USER_DATA"
const IS_FETCHING = "IS_FETCHING"

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
                ...action.data,
                isAuth: true
            }
                default:
                    return state;
    }

}


// ACTION CREATORS
export const setAuthUserData = (userId, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            login,
            email
        }
    }
}





export default authReducer;