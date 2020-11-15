/* eslint-disable array-callback-return */
import React from 'react';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';
import avatar from "../../img/avatar.png"



const Sidebar = (props) => {

    // Mapping

    
    return (
        <aside className="sidebar">
            <ul className="sidebar__nav">
                <li className="sidebar__nav__li"> <Link to="/profile">Profile</Link></li>
                {/* <li className="sidebar__nav__li"> <Link to="/dialogs">Dialogs</Link></li> */}
                <li className="sidebar__nav__li"> <Link to="/users">Users</Link></li>
               
               
               
            </ul>
            <h3>Latest friends</h3>
            <ul className="sidebar__friends">
                 
                {
                    props.friends.map((user) => {
                        return <li key={user.id}>
                            <figure>
                                <Link to={"/profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
                                </Link>

                                <figcaption>

                                    <p>{user.name}</p>
                                </figcaption>
                            </figure>
                        </li>
                    })
                }
            </ul>

        </aside>
    )

}


export default Sidebar;