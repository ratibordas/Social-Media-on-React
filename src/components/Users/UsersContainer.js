import React, { Suspense } from 'react'
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import {follow, unfollow, setUsers,setCurrentPage, setUsersTotalCount, isFetching,toggleFollowingProgress
} from '../../reducers/users-reducer';
import { usersAPI } from '../../api/api';
const Users = React.lazy(() => import('./Users'));


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.isFetching(true);

        // get users data via Axios from API
       usersAPI.getUsersFromApi(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isFetching(false);
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

     onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
         this.props.isFetching(true);
         // get users data via Axios from API
        usersAPI.getUsersFromApi(pageNumber, this.props.pageSize)
             .then(data => {
                this.props.isFetching(false);
                this.props.setUsers(data.items)
            })
    }
    
   

    render() {
         
        return ( 
            <Suspense fallback={<Loader />}>
                
                {this.props.isFetching ? <div></div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//          setTotalUsersCount: (totalCount) => {
//              dispatch(setUsersTotalCountActionCreator(totalCount))
//         },
//         isFetching: (isFetching) => {
//             dispatch(isFetchingActionCreator(isFetching))
//         }
//       }
//  }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    isFetching,
    toggleFollowingProgress
})(UsersContainer)


