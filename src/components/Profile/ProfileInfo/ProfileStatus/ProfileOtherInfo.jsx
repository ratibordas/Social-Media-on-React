import React from 'react'


const ProfileOtherInfo = ( {profile, toggleEditInfo, authStatus}) => {

    return (
        <>
            <div>
                <span>{profile.fullName || "NoName"}</span>
            </div>
            <div>
                <span>{profile.aboutMe || "About Me"}</span>
            </div>
            <div>
                <span>Search job:{profile.lookingForAJob ? profile.lookingForAJobDescription : "I dont know"}</span>
            </div>
            <div>

                {/* Mapping */}
                <span>Contact: 
                   
                    {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}</span>
                
                {/* Mapping */}
            </div>
              {
                 !authStatus ?  <button onClick={toggleEditInfo} >Edit Information</button> : null
              }
            
        </>
    )



}




// Contact template
export const Contact = ({ contactTitle, contactValue }) => {
    return (
       
            <li><strong>{contactTitle}</strong>: {contactValue}</li>
        
    )
}

export default ProfileOtherInfo