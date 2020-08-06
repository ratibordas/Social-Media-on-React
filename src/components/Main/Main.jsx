import React from 'react';
import "./Main.scss";

import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Main = (props) => {

    
    return (
        <main className="main">
          <ProfileInfo/>
            <PostsContainer
                // postsData={props.postsData}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </main>
    )
}

export default Main;