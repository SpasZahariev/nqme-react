import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
//warns us if we mutate state in the redux store
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState?: any) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
