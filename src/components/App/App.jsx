import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom'
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




const App = (props) => {

  useEffect(() => {
    props.initializedThunkCreator();
  }, [])


  if (!props.initialized) {
    return <Loader />
  }
  return (
    <>
       <Parrallax/>
      <section className="container">
        <HeaderContainer />
        <SidebarContainer />
        <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/profile/:userId?"  >
            <ProfileContainer />
          </Route>
          <Route path="/dialogs" >
            <DialogsContainer />
          </Route>
          <Route path="/users">
            <UsersContainer />
          </Route>
          <Route path="/friends">
            <div>Friends</div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
        </main>
      </section>
    </>
  )

}


const Parrallax = (props) => {
  return (
    <>
       <div id="background"></div>
      <div id="midground"></div>
      <div id="foreground"></div>
    </>
  )

}


// Redux mapStateToProps
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// React-Redux Connect
// if u will find bugs with routing, add compose + withRouter (L 80)
export default connect(mapStateToProps, { initializedThunkCreator })(App);






