import React, { Suspense } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'

import {
    follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, isFetching
} from '../../reducers/users-reducer';
const Users = React.lazy(() => import('./Users'));


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.isFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.isFetching(true);
         Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
             .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    
   

    render() {
         
        return ( 
            <Suspense fallback={<Loader />}>
                
                {/* {this.props.isFetching ? <Loader/> : null} bug with show up loader during pagination */}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                unfollow={this.props.unfollow}
               
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
        isFetching: state.usersPage.isFetching
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
    follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, isFetching
})(UsersContainer)


