

// Action types
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

// Data
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
        // add post into Main page
        case ADD_POST:
            let newPost = {
                id: Math.random(1 * 10),
                text: state.newPostText,
                likeCounts: 0
            }
            state.postsData.push(newPost);
            state.newPostText = ""


            break;
            // upd post into Main page
        case UPDATE_POST:
            state.newPostText = action.newText;


            break;

        default:
            return state;
    }
    return state;
}


// Action creators
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