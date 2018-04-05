import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import './index.css';
import App from './App';
import cartReducer from './store/reducers/cartReducer';
import registerServiceWorker from './registerServiceWorker';
import userReducer from "./store/reducers/userReducer";

const rootReducer = combineReducers({ 
    cart: cartReducer,
    user: userReducer,
    form: formReducer,
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
