import thunk from "redux-thunk";
import { loginReducer } from "./Login/LoginReducer";
import { HomeReducer } from "./Home/HomeReducer";
const {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} = require("redux");

const rootReducer = combineReducers({
  loginReducer,
  HomeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
