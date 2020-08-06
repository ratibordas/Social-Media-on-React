import React from 'react';
import Posts from './Posts'

import {addPostActionCreator, updatePostActionCreator} from '../../../store/state'



const PostsContainer = (props) => {
    
    
    let state = props.store.getState();
    
    const addPost = () => {
    props.store.dispatch(addPostActionCreator())
}   
    
    const onPostChange = (text) => {
    props.store.dispatch(updatePostActionCreator(text))  
 }

    return (
        <Posts updatePost={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />
    )
}

export default PostsContainer;