import avatar from '../img/avatar.png'

// ACTION TYPES
const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"




// DATA
let initialState = {
    usersData: [{
            id: 1,
            fullName: "Ratiborka",
            status: "Enable for work",
            avatar: avatar,
            follow: true,
            location: {
                town: "Krasnodar",
                country: "Russia"
            },


        },
        {
            id: 2,
            fullName: "Sasha",
            status: "Wathing Queer Eye",
            avatar: avatar,
            follow: false,
            location: {
                town: "LA",
                country: "USA"
            },
        }
    ]

}




const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
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
                    usersData: state.usersData.map(user => {
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
            return {...state, usersData: [...state.userData, ...action.usersData]}
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