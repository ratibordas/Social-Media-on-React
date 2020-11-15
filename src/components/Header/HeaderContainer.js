import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {logoutThunkCreator } from '../../reducers/auth-reducer';
import {isAuthSelector,getLoginSelector} from '../../selectors/auth-selectors';

const HeaderContainer = (props) => {

        return (
            <Header {...props} />
        ) 
}

// Redux mapStateToProps
const mapStateToProps = (state) => {

    return {
        isAuth: isAuthSelector(state),
        login: getLoginSelector(state)
    }
}


// React-Redux Connect
export default connect(mapStateToProps, {logoutThunkCreator })(HeaderContainer);