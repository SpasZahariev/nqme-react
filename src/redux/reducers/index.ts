import { combineReducers } from "redux";
import pinReducer from "./pinReducer";
import isMasterReducer from "./isMasterReducer";
import usernameReducer from "./usernameReducer";
import playlistReducer from "./playlistReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  pin: pinReducer,
  usernames: usernameReducer,
  playlist: playlistReducer,
  isMaster: isMasterReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
