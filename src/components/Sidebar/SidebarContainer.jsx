import React,{useEffect} from 'react'
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import {getFriendsSelector} from '../../selectors/users-selectors'
import {getFriendsThunkCreator} from '../../reducers/users-reducer'



const SidebarContainer = (props) => {
      
  
    useEffect(() => {
         props.getFriendsThunkCreator()    
    },[])
    
    


    return (
        <Sidebar {...props}/>
    )
}







// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        friends: getFriendsSelector(state)
     }
}







export default connect(mapStateToProps,{getFriendsThunkCreator})(SidebarContainer);