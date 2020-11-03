import React from 'react';
import "./Profile.scss";
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   
    
    return (
        <main className="profile">
            <ProfileInfo profile={props.profile} status={props.status} 
            updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
            authorizedUserId={props.authorizedUserId}
            authStatus={props.match.params.userId}
            updatePhotoThunkCreator={props.updatePhotoThunkCreator}
            />
            <PostsContainer profile={props.profile} />
        </main>
    )
}

export default Profile;