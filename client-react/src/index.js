// Necessary Imports
import React from 'react';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/edituser';

// Routing Imports
import { render } from 'react-dom';

// Component Imports
import App from './App';

// Styling Imports
import './index.css';


/************************REDUX STORE*********************** */
const store = createStore(
    reducer,
    undefined
);

//console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

render(<App store={store} />, document.getElementById('root'))

unsubscribe();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
