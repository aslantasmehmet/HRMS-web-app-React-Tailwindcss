import { applyMiddleware, createStore } from "redux";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducers";
import { loadState } from "../localStorage";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export function configureStore() {
  const persistedState = loadState();

  return createStore(rootReducer, persistedState, composedEnhancer);
}
