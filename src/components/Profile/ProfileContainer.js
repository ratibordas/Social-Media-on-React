import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        this.props.getUserProfileThunkCreator(userId)
    }


    render() {

        return (
            <main className="profile">
                <Profile {...this.props} profile={this.props.profile} />
            </main>
        )
    }
}







// Redux mapStateToProps
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// Redux compose
export default compose(
    // react-redux connect
    connect(mapStateToProps, { getUserProfileThunkCreator }),
   // withRouter HOC
    withRouter,
    // HOC 
    withAuthRedirect)(ProfileContainer)