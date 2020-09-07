

// ACTION TYPES
const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_FETCHING = "IS_FETCHING"


// DATA
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                            followed: true
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
                                followed: false
                            }
                        }
                        return user;
                    })
                }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
       
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        
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

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersTotalCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const isFetchingActionCreator = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}




export default usersReducer;