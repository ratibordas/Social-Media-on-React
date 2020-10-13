import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'




// Components
import HeaderContainer from '../Header/HeaderContainer';
import SidebarContainer from '../Sidebar/SidebarContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Login/Login';
import { initializedThunkCreator } from '../../reducers/app-reducer';
import Loader from '../Loader/Loader';




class App extends React.Component {


  componentDidMount() {
    this.props.initializedThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }
    return (
      <Router>
        <section className="container">
          <HeaderContainer />
          <SidebarContainer />
          <Switch>
            <Route path="/profile/:userId?"  >
              <ProfileContainer />
            </Route>
            <Route path="/dialogs" >
              <DialogsContainer />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>

        </section>
      </Router>
    )
  }
}
// Redux mapStateToProps
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// React-Redux Connect
// if u will find bugs with routing, add compose + withRouter (L 80)
export default connect(mapStateToProps, { initializedThunkCreator })(App);






