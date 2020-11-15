import React from 'react'
import "./ProfileInfo.scss";
import myAvatar from '../../../img/my-avatar.jpg';
import Loader from '../../Loader/Loader';
import ProfileStatus from './ProfileStatus/ProfileStatus'



const ProfileInfo = (props) => {

  const photoUpdate = (e) => {
     if(e.target.files) {
         props.updatePhotoThunkCreator(e.target.files[0])
     }
  }

 

    if (!props.profile) {

        return <Loader />
    }

    return (
        <section className="profile__content">
            <figure className="profile__wallpaper">
                <div className="profile__wallpaper__photo-large">
                <img src={props.profile.photos.large || myAvatar} alt="" />
                </div> 
                {
                !props.authStatus ? <input type={"file"} accept=".jpg, .jpeg, .png"  className="profile__content__update-photo" onChange={photoUpdate}/> : null
                  }
                <figcaption>
               
                  <ProfileStatus 
                        profile={props.profile}
                        status={props.status}
                        updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                        authorizedUserId={props.authorizedUserId}
                        authStatus={props.authStatus}
                        saveProfileDataThunkCreator={props.saveProfileDataThunkCreator}
                        />

                </figcaption>
            </figure>
        </section>
    )

}

export default ProfileInfo;