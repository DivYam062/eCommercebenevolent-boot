import { legacy_createStore,combineReducers } from "redux";
import { HomeReducer } from "./homeReducer/reducer";

export const rootreducer = combineReducers({HomeReducer});
export const store = legacy_createStore(rootreducer);
