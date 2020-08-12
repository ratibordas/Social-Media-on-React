import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import SidebarContainer from '../Sidebar/SidebarContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';



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
        </Switch>

      </section>
    </Router>
  )

}

export default App;


 