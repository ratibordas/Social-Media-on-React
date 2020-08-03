
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";


const profileReducer = (state, action) => {
    
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

export default profileReducer;