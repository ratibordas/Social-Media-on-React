import React from 'react'



const Users = (props) => {
    
    



    const usersList = props.users.map((user) => {
        return (
            <li key={user.id}>
                <figure>
                    <img src={user.avatar} alt="" />
                    <figcaption>
                        {user.follow
                            ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
                            : <button onClick={() => props.follow(user.id)}>Unfollow</button>}
                        
                    </figcaption>
                </figure>
                <h1>{user.fullName}</h1>
                <h4>{user.status}</h4>
                <p>{user.location.country}</p>
                 <p>{user.location.town}</p>

            </li>
        )
    })




    return (
        <section>
            <ul>
        {usersList}


           </ul>
        </section>
    )
}



export default Users