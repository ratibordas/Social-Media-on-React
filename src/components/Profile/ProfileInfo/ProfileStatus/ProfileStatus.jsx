import React, { useState } from 'react'
import ProfileStatusChanger from './ProfileStatusChanger'
import ProfileDataFormRedux from './ProfileDataForm'
import ProfileOtherInfo from './ProfileOtherInfo'


const ProfileStatus = (props) => {

    const [editInfo, setEditInfo] = useState(false)

    const onSubmit = (formData) => {
       props.saveProfileDataThunkCreator(formData).then(
       () => {
        setEditInfo(false);
       })
       
    }



    return (
        <>
       
            {
                editInfo && !props.authStatus
                ? <ProfileDataFormRedux  profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} /> :
                 <ProfileOtherInfo profile={props.profile} authStatus={props.authStatus}  toggleEditInfo={() => setEditInfo(true)} />
            }

            <div>
                <ProfileStatusChanger status={props.status}
                    updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} authStatus={props.authStatus} />
            </div>

        </>
    )




}




export default ProfileStatus;