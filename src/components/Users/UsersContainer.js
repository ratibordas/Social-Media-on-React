import React, { Suspense } from 'react'
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import {setUsers,setCurrentPage, setUsersTotalCount, isFetching,toggleFollowingProgress, getUsersThunkCreator,unfollowThunkCreator, followThunkCreator
} from '../../reducers/users-reducer';
import { compose } from 'redux';
import {getUsersSelector, getPageSizeSelector,getTotalUsersCountSelector,getCurrentPageSelector,getIsFetchingSelector,getFollowingInProgressSelector} from '../../selectors/users-selectors'

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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
     }
}

// Redux compose
export default compose(
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




