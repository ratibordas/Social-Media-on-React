import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator,getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11510;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }


    render() {

        return (
            <main className="profile">
                <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                
                />
            </main>
        )
    }
}







// Redux mapStateToProps
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

// Redux compose
export default compose(
    // react-redux connect
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator }),
   // withRouter HOC
    withRouter,
    // HOC 
    withAuthRedirect)(ProfileContainer)