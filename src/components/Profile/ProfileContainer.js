import React, {useEffect} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator,getUserStatusThunkCreator, updateUserStatusThunkCreator,updatePhotoThunkCreator } from '../../reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const ProfileContainer = (props) => {



    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if(!userId) {
                props.history.push("/login")
            }
        }
        props.getUserProfileThunkCreator(userId);
        props.getUserStatusThunkCreator(userId);
       

    },[props.match.params.userId])
    


    

        return (
            <main className="profile">
                <Profile {...props} />
            </main>
        )
    
}





// Redux mapStateToProps
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

// Redux compose
export default compose(
    // react-redux connect
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator,updatePhotoThunkCreator }),
   // withRouter HOC
    withRouter,
    // HOC 
    withAuthRedirect)(ProfileContainer)