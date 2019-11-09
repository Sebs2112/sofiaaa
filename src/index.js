import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';

const store = createStore(combineReducers({user: userReducer, category: categoryReducer}),  applyMiddleware(
    thunk
  ));


// The provider component becomes tbe parent of app, with the store as a prop
// meaning that all components inside will now have access to the store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
