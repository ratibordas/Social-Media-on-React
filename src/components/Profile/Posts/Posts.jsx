import React from 'react';
import "./Posts.scss";
import SinglePost from "./SinglePost/SinglePost";
import { reset, reduxForm, Field } from 'redux-form'



const Posts = (props) => {

    // Mapping

    let postsElements = props.postsData.map((post) => {
        return <SinglePost text={post.text} key={post.id} likeCounts={post.likeCounts} />
    })

    // submit callback
    const addNewPost = (postData) => {
        props.addPost(postData.newPostBody)
    }

    return (
        <section className="posts__content">
            <h2>My posts</h2>

            <AddPostsReduxForm onSubmit={addNewPost} />
            <ul>
                {postsElements}
            </ul>

        </section>
    )
}


const AddPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field type="text" name="newPostBody" component={"input"} />
            <button>Submit</button>

        </form>
    )

}


// reset form field after submit
const afterSubmit = (result, dispatch) =>
    dispatch(reset("newPostsForm"));

//redux-form HOC
const AddPostsReduxForm = reduxForm({
    form: "newPostsForm",
    onSubmitSuccess: afterSubmit
})(AddPostsForm)

export default Posts;