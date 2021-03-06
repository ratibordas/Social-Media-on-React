import React from 'react'
import { Link } from 'react-router-dom';
import avatar from "../../img/avatar.png"

const User = ({user, followingInProgress, unfollowThunkCreator, followThunkCreator}) => {
    return (
        <li key={user.id}>
            <figure>
                <Link to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
                </Link>

                <figcaption>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        unfollowThunkCreator(user.id)

                    }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            followThunkCreator(user.id)
                        }
                        }>Follow</button>
                    }

                </figcaption>
            </figure>
            <p>{user.name}</p>
            <p>{user.status}</p>


        </li>
    )
}


export default User;