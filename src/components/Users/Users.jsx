import React from 'react'
import "./Users.scss"
import User from './User';
import Pagination from './Paginator';
const Users = (props) => {

    return (
        <section className="users">
           <Pagination
           currentPage={props.currentPage} 
           onPageChanged={props.onPageChanged}
           totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
           />
            <ul className="users__profiles">
                {
                    props.users.map((user) => {
                        return (
                            <User user={user}
                            followingInProgress={props.followingInProgress}
                            key={user.id}
                            unfollowThunkCreator={props.unfollowThunkCreator}
                            followThunkCreator={props.followThunkCreator}/>
                
                        )
                    })
                }
            </ul>
        </section>
    )
}



export default Users;