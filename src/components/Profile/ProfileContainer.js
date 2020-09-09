import React from 'react';
import Axios from 'axios'
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, updatePost, addPost } from '../../reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
         Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
         return (
        <main className="profile">
                 <Profile {...this.props} profile={this.props.profile}/>
        </main>
    )
    }
}





const mapStateToProps = (state) => ({
   profile: state.profilePage.profile

});


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer)) ;