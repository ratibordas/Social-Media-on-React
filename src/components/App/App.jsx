import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Dialogs from '../Dialogs/Dialogs';



const App = (props) => {



  return (
    <Router>
      <section className="container">
        <Header />
        <Sidebar dialogsData={props.state.dialogsPage.dialogsData} />
        <Switch>
          <Route path="/" exact >
            <Main postsData={props.state.profilePage.postsData}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch} />
          </Route>
          <Route path="/dialogs" >
            {/* <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData}
              newMessageText={props.state.dialogsPage.newMessageText}
              dispatch={props.dispatch} /> */}
             <Dialogs store={props.store} />
          </Route>
        </Switch>

      </section>
    </Router>
  )

}

export default App;
