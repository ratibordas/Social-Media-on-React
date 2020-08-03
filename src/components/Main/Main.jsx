import React from 'react';
import "./Main.scss";

import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Main = (props) => {

   
    return (
        <main className="main">
          <ProfileInfo/>
            <Posts postsData={props.postsData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </main>
    )
}

export default Main;