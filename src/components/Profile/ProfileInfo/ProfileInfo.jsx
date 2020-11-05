import React from 'react'
import "./ProfileInfo.scss";
import myAvatar from '../../../img/my-avatar.jpg';
import myWallpapers from '../../../img/my-wallpapers.jpg';
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
        <>
            <figure className="profile__wallpaper">
                <div className="profile__wallpaper__photo-large">
                <img src={props.profile.photos.large || myWallpapers} alt="" />
                </div> 
                <figcaption>
                {
                !props.authStatus ? <input type={"file"} onChange={photoUpdate}/> : null
                  }
                </figcaption>
            </figure>
           
            
            <div className="profile__content">
                <figure className="profile__content__avatar">
                    <img src={props.profile.photos.small || myAvatar} alt="" />
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

            </div>



        </>
    )

}

export default ProfileInfo;