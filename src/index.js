import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import store from "./store/store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.getElementById('root'));





serviceWorker.unregister();



