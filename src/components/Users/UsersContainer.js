import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux';
import Loader from '../Loader/Loader'
import {
    setUsers, setCurrentPage, setUsersTotalCount, isFetching, toggleFollowingProgress, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator
} from '../../reducers/users-reducer';
import { compose } from 'redux';
import { getUsersSelector, getPageSizeSelector, getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector } from '../../selectors/users-selectors'

const Users = React.lazy(() => import('./Users'));


const UsersContainer = (props) => {



    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])

    const onPageChanged = (pageNumber) => {
        props.getUsersThunkCreator(pageNumber, props.pageSize);
    }


    return (
        <Suspense fallback={<Loader />}>

            {props.isFetching ? <div></div> : null}
            <Users {...props} onPageChanged={onPageChanged} />

        </Suspense>
    )

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
    }))(UsersContainer)




