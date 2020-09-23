import {usersAPI} from '../api/api'


// ACTION TYPES
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

// DATA
let initialState = {
    postsData: [{
        id: 1,
        text: "Hi, I am tired",
        likeCounts: 0
    }, ],
    newPostText: "Test render",
    profile: null
}



// REDUCER
const profileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        // ADD POST INTO MAIN PAGE
        case ADD_POST:
            let newPost = {
                id: Math.random(1 * 10),
                text: state.newPostText,
                likeCounts: 0
            }
            // create and return new state obj right away

            return {
            ...state,
            newPostText: "",
            postsData: [...state.postsData, newPost] 
            }
        
        
            // UPD POST INTO MAIN PAGE
        case UPDATE_POST:

            // create and return new state obj right away
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }

}


// ACTION CREATORS
export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updatePost = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

// THUNKS
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
       }






export default profileReducer;