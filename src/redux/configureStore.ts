import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//warns us if we mutate state in the redux store
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// export default function configureStore(initialState?: any) {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
//   );
// }

// FOR PROD
export default function configureStore(initialState?: any) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
