import Posts from './Posts'
import { addPostActionCreator, updatePostActionCreator } from '../../../store/state'
import { connect } from 'react-redux';






// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
     }
}

// react-redux mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
        dispatch(addPostActionCreator())
        }
      }
 }



//  react-redux connect
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);



export default PostsContainer;