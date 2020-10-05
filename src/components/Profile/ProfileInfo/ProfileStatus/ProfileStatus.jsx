import React from 'react'




class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    editActive = () => {
        this.setState({ editMode: true })
    }
    editPassive = () => {
        this.setState({ editMode: false })
        this.props.updateUserStatusThunkCreator(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
         if(prevProps.status !== this.props.status) {
             this.setState({
                 status: this.props.status
             })
         }
    }

    render() {
        return (
            <>
                <div>
                    <span>{this.props.fullName ? this.props.fullName : "user name null"}</span>
                </div>
                <div>
                    <span>{this.props.aboutMe ? this.props.aboutMe : "user about null"}</span>
                </div>
                <br />
                <div>
                    {
                        this.state.editMode ?
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editPassive} value={this.state.status}></input> :
                            <span onDoubleClick={this.editActive}>{this.props.status ? this.props.status : "Where is your status?"}</span>
                    }
                </div>


            </>
        )

    }


}

export default ProfileStatus;