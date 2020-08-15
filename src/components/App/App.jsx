import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import SidebarContainer from '../Sidebar/SidebarContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';



const App = (props) => {



  return (
    <Router>
      <section className="container">
        <Header />
        <SidebarContainer/>
        <Switch>
          <Route path="/" exact >
            <Main />
          </Route>
          <Route path="/dialogs" >
             <DialogsContainer/>
          </Route>
          <Route path="/users">
             <UsersContainer/>
          </Route>
        </Switch>

      </section>
    </Router>
  )

}

export default App;


 