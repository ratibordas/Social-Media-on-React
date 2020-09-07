import React from 'react'
import avatar from "../../img/avatar.png"
import "./Users.scss"

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
                                    <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
                                    <figcaption>
                                        {user.followed ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
                                            : <button onClick={() => props.follow(user.id)}>Unfollow</button>}

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