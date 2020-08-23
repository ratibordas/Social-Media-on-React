import avatar from '../img/avatar.png'

// ACTION TYPES
const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"




// DATA
let initialState = {
    users: []

}




const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            follow: true
                        }
                    }
                    return user;
                })
            }
            case UNFOLLOW_USER:
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {
                                ...user,
                                follow: false
                            }
                        }
                        return user;
                    })
                }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
                default:
                    return state;
    }

}


// ACTION CREATORS

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}




export default usersReducer;