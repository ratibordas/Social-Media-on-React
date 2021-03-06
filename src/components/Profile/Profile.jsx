import React from 'react';
import "./Profile.scss";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   
    
    return (
        <main >
            <ProfileInfo profile={props.profile} status={props.status} 
            updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
            authorizedUserId={props.authorizedUserId}
            authStatus={props.match.params.userId}
            updatePhotoThunkCreator={props.updatePhotoThunkCreator}
            saveProfileDataThunkCreator={props.saveProfileDataThunkCreator}
            />
            {/* <PostsContainer profile={props.profile} /> */}
        </main>
    )
}

export default Profile;