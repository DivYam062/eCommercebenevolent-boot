import { legacy_createStore,combineReducers } from "redux";
import { HomeReducer } from "./homeReducer/reducer";
import { loginReducer } from "../Pages/Login/LoginReducer";

export const rootreducer = combineReducers({HomeReducer, loginReducer});
export const store = legacy_createStore(rootreducer);
