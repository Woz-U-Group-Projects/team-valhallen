import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 import { render } from 'react-dom';
 import { createStore } from 'redux';
 import reducer from './reducers/edituser';


/************************REDUX STORE*********************** */
 const store = createStore(
     reducer,
     undefined
 );

 console.log(store.getState());

 const unsubscribe = store.subscribe(() => console.log(store.getState()));

 render(<App store={store} />, document.getElementById('root'))

 unsubscribe();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();