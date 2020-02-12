import { combineReducers } from "redux";
import pinReducer from "./pinReducer";
import sessionNameReducer from "./sessionNameReducer";
import usernameReducer from "./usernameReducer";
import playlistReducer from "./playlistReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  pin: pinReducer,
  usernames: usernameReducer,
  playlist: playlistReducer,
  sessionName: sessionNameReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
