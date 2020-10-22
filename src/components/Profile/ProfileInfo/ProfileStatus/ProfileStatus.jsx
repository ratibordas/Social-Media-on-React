import React, {useEffect, useState} from 'react'





// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status
//     }

//     editActive = () => {
//         this.setState({ editMode: true })
//     }
//     editPassive = () => {
//         this.setState({ editMode: false })
//         this.props.updateUserStatusThunkCreator(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.target.value
//         })

//     }

//     componentDidUpdate(prevProps, prevState) {
//          if(prevProps.status !== this.props.status) {
//              this.setState({
//                  status: this.props.status
//              })
//          }
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     <span>{this.props.fullName ?this.props.fullName : "user name null"}</span>
//                 </div>
//                 <div>
//                     <span>{this.props.aboutMe ? this.props.aboutMe : "user about null"}</span>
//                 </div>
//                 <br />
//                 <div>
//                     {
//                         this.state.editMode ?
//                             <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editPassive} value={this.state.status}></input> :
//                             <span onDoubleClick={this.editActive}>{this.props.status ? this.props.status : "Where is your status?"}</span>
//                     }
//                 </div>


//             </>
//         )

//     }


// }

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
                    <span>{props.aboutMe ? props.aboutMe : "user about null"}</span>
                </div>
                <br />
                <div>
                    {
                        editMode ?
                            <input onChange={onStatusChange} autoFocus={true} onBlur={editPassive} value={status}></input> :
                            <span onDoubleClick={editActive}>{props.status ? props.status : "Where is your status?"}</span>
                    }
                </div>


            </>
        )

    


}



export default ProfileStatus;