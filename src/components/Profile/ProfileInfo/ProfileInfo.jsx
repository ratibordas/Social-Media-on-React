import React from 'react'
import "./ProfileInfo.scss";
import myAvatar from '../../../img/my-avatar.jpg';
import myWallpapers from '../../../img/my-wallpapers.jpg';
import Loader from '../../Loader/Loader';




const ProfileInfo = (props) => {

    if (!props.profile) {

        return <Loader />
    }

    return (
        <>
            <figure className="profile__wallpaper">
                <img src={myWallpapers} alt="" />
            </figure>

            <div className="profile__content">
                <figure className="profile__content__avatar">
                    <img src={props.profile.photos.large ? props.profile.photos.large : myAvatar} alt="" />
                    <figcaption>
                        <span>{props.profile.fullName ? props.profile.fullName : "user name null"}</span>
                        <br />
                        <span>{props.profile.aboutMe ? props.profile.aboutMe : "user status null"}</span>


                    </figcaption>
                </figure>

            </div>



        </>
    )

}

export default ProfileInfo;