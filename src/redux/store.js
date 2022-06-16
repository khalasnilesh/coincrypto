import {createStore , applyMiddleware, combineReducers} from 'redux';

import logger from 'redux-logger';
import  authReducer  from './reducer/authReducer';


const thunkMiddleware = require('redux-thunk').default;

//const store = createStore(userReducer , applyMiddleware(logger));
const mainReducer=combineReducers(
    {
       
        auth : authReducer,
    }
);
const store=createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;
//export default productStore;  





