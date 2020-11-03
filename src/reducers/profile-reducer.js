import { act } from 'react-dom/test-utils';
import { usersAPI, profileAPI } from '../api/api'


// ACTION TYPES
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_PHOTO = "UPDATE_PHOTO";
// DATA
let initialState = {
    postsData: [{
        id: 1,
        text: "Hi, I am tired",
        likeCounts: 0
    }],
    profile: null,
    status: ""
}



// REDUCER
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        // ADD POST INTO MAIN PAGE
        case ADD_POST:
            let newPost = {
                id: Math.random(1 * 10),
                text: action.newPostBody,
                likeCounts: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
            case UPDATE_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }

}


// ACTION CREATORS
export const addPost = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}



export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhoto = (photos) => {
    return {
        type: UPDATE_PHOTO,
        photos
    }
}

// THUNKS
export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))

}

export const getUserStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileAPI.getStatus(status)
    dispatch(setUserStatus(response.data))

}
export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }

}

export const updatePhotoThunkCreator = (photo) => async (dispatch) => {
    const response = await profileAPI.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhoto(response.data.data.photos))
    }

}

export default profileReducer;