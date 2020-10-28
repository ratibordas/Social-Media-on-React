import React from 'react'
import "./Users.scss"
import User from './User';
const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <section className="users">
            <ul className="users__pagination">
                {
                    pages.map(page => {
                        return <li className={`users__pagination__item ${props.currentPage === page ? "selected" : ""}`}
                            onClick={(e) => props.onPageChanged(page)}
                        >{page}</li>
                    })
                }
            </ul>
          
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