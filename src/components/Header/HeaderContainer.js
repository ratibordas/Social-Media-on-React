import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {logoutThunkCreator } from '../../reducers/auth-reducer';

class HeaderContainer extends React.Component {

   
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

// Redux mapStateToProps
const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// React-Redux Connect
export default connect(mapStateToProps, {logoutThunkCreator })(HeaderContainer);