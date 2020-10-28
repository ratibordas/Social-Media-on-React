import { usersAPI } from '../api/api'

// ACTION TYPES
const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_FETCHING = "IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// DATA
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}



// REDUCER
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
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}


// ACTION CREATORS

export const follow = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersTotalCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const isFetching = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

// THUNKS
export const getUsersThunkCreator = (currentPage = 1, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(isFetching(true));

        // get users data via Axios from API
        const data = await usersAPI.getUsersFromApi(currentPage, pageSize)
        dispatch(isFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))

    }
}
export const unfollowThunkCreator = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const data = await usersAPI.unfollow(id)
        if (data.resultCode === 0) {
            dispatch(unfollow(id))
        }
        dispatch(toggleFollowingProgress(false, id))

    }


}
export const followThunkCreator = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const data = await usersAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    }


}


export default usersReducer;