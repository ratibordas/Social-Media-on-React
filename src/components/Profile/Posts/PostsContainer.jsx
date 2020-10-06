import Posts from './Posts'
import { addPost } from '../../../reducers/profile-reducer'
import { connect } from 'react-redux';

// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
     }
}


//  react-redux connect
const PostsContainer = connect(mapStateToProps,{addPost})(Posts);



export default PostsContainer;