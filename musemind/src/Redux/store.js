import {thunk} from "redux-thunk";
import { loginReducer } from "../Pages/Login/LoginReducer"
import { HomeReducer } from "./homeReducer/reducer";

import { reducer as productReducer } from '../Pages/Products/ProductReducer/reducer';

import { combineReducers } from 'redux';

import { applyMiddleware } from 'redux';
import { legacy_createStore  } from 'redux';
// const { legacy_createStore } = require("redux");




const rootReducer=combineReducers({
    productReducer,
    loginReducer,
    HomeReducer
    })


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
