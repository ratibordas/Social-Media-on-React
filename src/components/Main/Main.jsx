import React from 'react';
import "./Main.scss";

import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Main = (props) => {

    
    return (
        <main className="main">
          <ProfileInfo/>
            <PostsContainer />
        </main>
    )
}

export default Main;