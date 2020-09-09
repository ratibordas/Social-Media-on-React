import React from 'react';
import "./Posts.scss";
import SinglePost from "./SinglePost/SinglePost";




const Posts = (props) => {

    

   
   
    // Mapping

    let postsElements = props.postsData.map((post) => {
       return <SinglePost text={post.text} key={post.id} likeCounts={post.likeCounts}/>
})

    
    
    const onAddPost = () => {
       props.addPost()
    // props.dispatch(addPostActionCreator())
}   
    
    const onPostChange = (e) => {
        props.updatePost(e.target.value)
    // props.dispatch(updatePostActionCreator(e.target.value))
        
 }

    return (
        <section className="posts__content">
            <h2>My posts</h2>
             <input  onChange={onPostChange}  type="text" name="post" value={props.newPostText} />
             <button onClick={onAddPost}>Submit</button>
            <ul>
               {postsElements}
             </ul>
            
        </section>
    )
}

export default Posts;