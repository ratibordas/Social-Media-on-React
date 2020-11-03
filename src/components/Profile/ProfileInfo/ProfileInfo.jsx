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
                <img src={props.profile.photos.large || myWallpapers} alt="" />
             {
                !props.authStatus ? <input type={"file"} onChange={photoUpdate}/> : null
             }
                
                
                
               
            </figure>
            
            <div className="profile__content">
                <figure className="profile__content__avatar">
                    <img src={props.profile.photos.small || myAvatar} alt="" />
                    <figcaption>
                        <ProfileStatus 
                        fullName={props.profile.fullName}
                        aboutMe={props.profile.aboutMe}
                        status={props.status}
                        updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                        authorizedUserId={props.authorizedUserId}
                        />


                    </figcaption>
                </figure>

            </div>



        </>
    )

}

export default ProfileInfo;