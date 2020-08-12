// ACTION TYPES
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

// DATA
let initialState = {
    postsData: [{
        id: 1,
        text: "Hi, I am tired",
        likeCounts: 0
    }, ],
    newPostText: "Test render"
}




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
        default:
            return state;
    }

}


// ACTION CREATORS
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}








export default profileReducer;