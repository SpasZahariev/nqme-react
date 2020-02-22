import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";
import { Song } from "components/common/objectTypes/song";

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
