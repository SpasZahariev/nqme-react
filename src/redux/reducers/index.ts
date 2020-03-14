import { combineReducers } from "redux";
import pinReducer from "./pinReducer";
import sessionNameReducer from "./sessionNameReducer";
import usernameReducer from "./usernameReducer";
import songReducer from "./songReducer";
import apiStatusReducer from "./apiStatusReducer";
import searchResultsReducer from "./searchResultsReducer";
import currentlyPlayingReducer from "./currentlyPlayingReducer";
import likedTitlesReducer from "./likedTitlesReducer";

const rootReducer = combineReducers({
  pin: pinReducer,
  usernames: usernameReducer,
  songs: songReducer,
  sessionName: sessionNameReducer,
  searchResults: searchResultsReducer,
  currentlyPlaying: currentlyPlayingReducer,
  likedTitles: likedTitlesReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
