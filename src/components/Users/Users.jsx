import React from 'react'
import Axios from 'axios'
import avatar from "../../img/avatar.png"
import "./Users.scss"

class Users extends React.Component {



    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
         Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
       
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            
        }
        return (
            <section className="users">
                <ul className="users__pagination">
                    {
                        pages.map(page => {
                            return <li className={`users__pagination__item ${this.props.currentPage === page ? "selected" : ""}`}
                            onClick={(e) => this.onPageChanged(page)}
                            >{page}</li>
                       })
                       
                       
                    }




                </ul>

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