import React from 'react'
import avatar from "../../img/avatar.png"
import "./Users.scss"
import Axios from 'axios'
import { Link } from 'react-router-dom';

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
                            <li key={user.id}>
                                <figure>
                                    <Link to={"/profile/" + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
                                    </Link>

                                    <figcaption>
                                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            
                                            props.toggleFollowingProgress(true, user.id)
                                            Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: { "API-KEY": "b6644f2f-7ed2-4906-a12a-7c8685cda02e" }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                      props.toggleFollowingProgress(false, user.id)
                                                })
                                        }}>Unfollow</button> :
                                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                                props.toggleFollowingProgress(true, user.id)
                                            Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: { "API-KEY": "b6644f2f-7ed2-4906-a12a-7c8685cda02e" }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)
                                                })
                                        }


                                        }>Follow</button>


                                        }

                                    </figcaption>
                                </figure>
                                <h1>{user.name}</h1>
                                <h4>{user.status}</h4>


                            </li>
                        )
                    })






                }


            </ul>
        </section>
    )



}



export default Users;