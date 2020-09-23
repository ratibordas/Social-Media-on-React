import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserDataThunkCreator } from '../../reducers/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }
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
export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(HeaderContainer);