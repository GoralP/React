import { combineReducers, createStore, applyMiddleware } from "redux";
import newsReducer from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ newsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };