import React from 'react';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';
import Friend from '../Friends/Friend/Friend';



const Sidebar = (props) => {

    // Mapping
    let friendList = props.dialogsData.map((friend) => {
         return <Friend id={friend.id} key={friend.id} name={friend.name} />
     })

    return (
        <aside className="sidebar">
            <ul>
                <Link to="/"><li>Profile</li></Link>
                <Link to="/dialogs"><li>Dialogs</li></Link>  
                 <Link to="/users"><li>Users</li></Link>  
            </ul>
            
            <div className="sidebar__friends">
                
                {friendList}
          </div>

        </aside>
    )

}


export default Sidebar;