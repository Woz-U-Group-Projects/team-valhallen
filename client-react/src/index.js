import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const store = createStore(rootReducer);

render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


/*********************ROUTING WITH SWITCH CASE***********************
import ConfigPage from './screens/ConfigPage';
import LogIn from './screens/LogIn';
import ManagerHome from './screens/ManagerHome';
import TechHome from './screens/TechHome';
import TenantHome from './screens/TenantHome';
import UserPage from './screens/UserPage';

const Index = ({ pathname }) => {
    switch (pathname) {
        case '/manager':
            return <ManagerHome />;
        case '/users':
            return <UserPage />;
        case '/config':
            return <ConfigPage />;
        case '/tenant':
            return <TenantHome />;
        case '/tech':
            return <TechHome />;
        default:
            return <LogIn />;
    }
}

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => pathname = window.location.pathname);

**************************************************************************/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
