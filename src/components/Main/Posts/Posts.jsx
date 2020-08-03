import React from 'react';
import "./Posts.scss";
import SinglePost from "./SinglePost/SinglePost";
import {addPostActionCreator, updatePostActionCreator} from '../../../store/state'



const Posts = (props) => {

    

      // REFERENCE from onPostChange
    // let newPostEl = React.createRef()
   
    // Mapping

    let postsElements = props.postsData.map((post) => {
       return <SinglePost text={post.text} key={post.id} likeCounts={post.likeCounts}/>
})

    const addPost = () => {
        props.dispatch(addPostActionCreator())
}   
    
    const onPostChange = (e) => {
         // Ref-variable text
        // let text = newPostEl.current.value;
    props.dispatch(updatePostActionCreator(e.target.value))
        
 }

    return (
        <section className="posts__content">
            <h2>My posts</h2>
            <input  onChange={onPostChange}  type="text" name="post" value={props.newPostText} />
             <button onClick={addPost}>Submit</button>
            <ul>
               {postsElements}
             </ul>
            
        </section>
    )
}

export default Posts;