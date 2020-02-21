import searchSongs from "../../apiConnection/searchSongs";
import * as types from "./actionTypes";
import { Song } from "components/common/objectTypes/song";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function searchSongsSuccess(songs: Song[]) {
  return { type: types.SEARCH_SONGS_SUCCESS, songs: songs };
}

export function searchForSongs(word: string) {
  return function(dispatch: any) {
    dispatch(beginApiCall());
    return searchSongs(word)
      .then((results: Song[]) => dispatch(searchSongsSuccess(results)))
      .catch((err: any) => dispatch(apiCallError()));
  };
}
