import React, {useState, useEffect} from 'react'


const ProfileStatusChanger = (props) => {
    
    
    const [editMode, changeEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const editActive = () => {
        changeEditMode(true)
    }

    const editPassive = () => {
        changeEditMode(false)
        props.updateUserStatusThunkCreator(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }



    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status)
        }
    }, [props.status])


    return (

        
        editMode && !props.authStatus ?
            <input onChange={onStatusChange} autoFocus={true} onBlur={editPassive} value={status}></input> :
            <span onDoubleClick={editActive}>{props.status ? props.status : "Where is your status?"}</span>

    )

}


export default ProfileStatusChanger;