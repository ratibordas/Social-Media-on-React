import React, { Suspense } from 'react'
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import {setUsers,setCurrentPage, setUsersTotalCount, isFetching,toggleFollowingProgress, getUsersThunkCreator,unfollowThunkCreator, followThunkCreator
} from '../../reducers/users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
const Users = React.lazy(() => import('./Users'));


class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

     onPageChanged = (pageNumber) => {
         this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }
    
   

    render() {
         
        return ( 
            <Suspense fallback={<Loader />}>
                
                {this.props.isFetching ? <div></div> : null}
               <Users {...this.props} onPageChanged={this.onPageChanged}/>
                 
                </Suspense>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
     }
}

// Redux compose
export default compose(
    // HOC 
    withAuthRedirect,
    // react-redux connect
    connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    isFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
}) )(UsersContainer)




