import React, {useEffect, useState} from 'react'


const ProfileStatus = (props) => {

  

   const [editMode, changeEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

  const editActive = () => {
    changeEditMode(true)
    }

  const  editPassive = () => {
        changeEditMode(false)
        props.updateUserStatusThunkCreator(status)
    }

  const onStatusChange = (e) => {
   
     setStatus(e.target.value)

    }

  

    useEffect(() => {
        if(status !== props.status) {
            setStatus(props.status)
        }
    }, [props.status])

    
        return (
            <>
                <div>
                    <span>{props.fullName ? props.fullName : "user name null"}</span>
                </div>
                <div>
                    {/* <span>{props.aboutMe ? props.aboutMe : "user about null"}</span> */}
                </div>
                <br />
                <div>
                    {
                        editMode && !props.authorizedUserId ?
                            <input onChange={onStatusChange} autoFocus={true} onBlur={editPassive} value={status}></input> :
                            <span onDoubleClick={editActive}>{props.status ? props.status : "Where is your status?"}</span>
                    }
                </div>


            </>
        )

    


}



export default ProfileStatus;