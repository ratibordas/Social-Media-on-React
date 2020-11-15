import React, {useEffect} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator,getUserStatusThunkCreator, 
    updateUserStatusThunkCreator,updatePhotoThunkCreator
    ,saveProfileDataThunkCreator } from '../../reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getProfileSelector,getStatusSelector,getAuthorizedUserIdSelector,isAuthSelector} from '../../selectors/profile-selectors';

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
                <Profile {...props}  />
            </main>
        )
    
}





// Redux mapStateToProps
const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    authorizedUserId: getAuthorizedUserIdSelector(state),
    isAuth: isAuthSelector(state)
});

// Redux compose
export default compose(
    // react-redux connect
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator,updatePhotoThunkCreator,saveProfileDataThunkCreator }),
   // withRouter HOC
    withRouter,
    // HOC 
    withAuthRedirect)(ProfileContainer)