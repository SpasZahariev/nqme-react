import { Song } from "../../components/common/objectTypes/song";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type Actions = { type: string; title: string };

// reducer that stores all the songs this client has liked
// the point is to limit the user to 1 like per song
export default function searchResultsReducer(
  likedTitlesState = initialState.likedTitles,
  action: Actions
) {
  switch (action.type) {
    case types.LIKE_SONG_OPTIMISTIC:
      return [...likedTitlesState, action.title];
    default:
      return likedTitlesState;
  }
}
