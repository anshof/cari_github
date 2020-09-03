import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import githubReducer from "./reducer/githubReducer";

const rootReducer = combineReducers({
  github: githubReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState().github.users);
});
export default store;
