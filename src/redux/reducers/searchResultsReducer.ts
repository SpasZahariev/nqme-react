import { Song } from "../../components/common/objectTypes/song";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type Actions = { type: string; songs: Song[] };

export default function searchResultsReducer(
  searchResultsState = initialState.searchResults,
  action: Actions
) {
  switch (action.type) {
    case types.SEARCH_SONGS_SUCCESS:
      return action.songs;
    case types.CLEAR_SEARCH_RESULTS:
      return [];
    default:
      return searchResultsState;
  }
}
