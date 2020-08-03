import React from 'react'
import "./ProfileInfo.scss";
import myAvatar from '../../../img/my-avatar.jpg';
import myWallpapers from '../../../img/my-wallpapers.jpg';

const ProfileInfo = () => {


    return (
        <>
         <figure className="main__wallpaper">
                <img src={myWallpapers} alt=""/>
            </figure>
            
            <div className="main__content">
                <figure className="main__content__avatar">
                    <img src={myAvatar} alt="" />
                    <figcaption>
                        <span>Avatar</span>
                    </figcaption>
                </figure>
                  
            </div>
        
        
        
        </>
)

}

export default ProfileInfo;