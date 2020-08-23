import React from 'react'
import Axios from 'axios'
import avatar from "../../img/avatar.png"


class Users extends React.Component {

   

    componentDidMount() {
         Axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
     }

    render() {
        return (
            <section>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                <ul>
                    {
                        this.props.users.map((user) => {
                            return (
                                <li key={user.id}>
                                    <figure>
                                        <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
                                        <figcaption>
                                             {user.followed
                                                ? <button onClick={() => this.props.unfollow(user.id)}>Follow</button>
                                                : <button onClick={() => this.props.follow(user.id)}>Unfollow</button>}

                                        </figcaption>
                                    </figure>
                                    <h1>{user.name}</h1>
                                    <h4>{user.status}</h4>
                                    <p>{"user.location.country"}</p>
                                    <p>{"user.location.town"}</p>

                                </li>
                            )
                        })






                    }


                </ul>
            </section>
        )

    }

}



export default Users