import React from 'react'


const ProfileOtherInfo = ( {profile, toggleEditInfo, authStatus}) => {

    return (
        <>
            <div>
                <span>Name: {profile.fullName || "NoName"}</span>
            </div>
            <div>
                <span>About me: {profile.aboutMe || "-"}</span>
            </div>
            <div>
                <span>Search job: {profile.lookingForAJob ? profile.lookingForAJobDescription : "-"}</span>
            </div>
            <div>
              <h4>Contact information</h4>
                <ul>
                   
                    {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}</ul>
                
               
                {
                 !authStatus ?  <button onClick={toggleEditInfo} >Edit Information</button> : null
              }
            </div>
             
            
        </>
    )



}




// Contact template
export const Contact = ({ contactTitle, contactValue }) => {
    return (
       
            <li><strong>{contactTitle}</strong>: {contactValue} </li>
        
    )
}

export default ProfileOtherInfo