import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import DialogsContainer from '../Dialogs/DialogsContainer';



const App = (props) => {



  return (
    <Router>
      <section className="container">
        <Header />
        <Sidebar dialogsData={props.state.dialogsPage.dialogsData} />
        <Switch>
          <Route path="/" exact >
            <Main store={props.store} />
          </Route>
          <Route path="/dialogs" >
            {/* <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData}
              newMessageText={props.state.dialogsPage.newMessageText}
              dispatch={props.dispatch} /> */}
             <DialogsContainer store={props.store} />
          </Route>
        </Switch>

      </section>
    </Router>
  )

}

export default App;
