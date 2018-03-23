import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
 import  Reducers from "./reducers/index"
import thunk from "redux-thunk";
import {BrowserRouter,Route} from "react-router-dom";
import './index.css';
import App from './view/app';
import registerServiceWorker from './registerServiceWorker';
const store=createStore(Reducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
