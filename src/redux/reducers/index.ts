import { combineReducers } from "redux";
import pinReducer from "./pinReducer";
import sessionNameReducer from "./sessionNameReducer";
import usernameReducer from "./usernameReducer";
import songReducer from "./songReducer";
import apiStatusReducer from "./apiStatusReducer";
import searchResultsReducer from "./searchResultsReducer";
import currentlyPlayingReducer from "./currentlyPlayingReducer";

const rootReducer = combineReducers({
  pin: pinReducer,
  usernames: usernameReducer,
  songs: songReducer,
  sessionName: sessionNameReducer,
  searchResults: searchResultsReducer,
  currentlyPlaying: currentlyPlayingReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
