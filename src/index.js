import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import  store   from "./store/store"
// import  store from "./store/state"


let rerender = (state) => {
    ReactDOM.render(<App state={state} store={store}
        
        dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})


serviceWorker.unregister();



