import searchSongs from "../../apiConnection/searchSongs";
import * as types from "./actionTypes";
import { Song } from "components/common/objectTypes/song";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function searchSongsSuccess(songs: Song[]) {
  return { type: types.SEARCH_SONGS_SUCCESS, songs: songs };
}

export function searchForSongs(word: string, sessionName: string) {
  return function(dispatch: any) {
    dispatch(beginApiCall());
    return searchSongs(word)
      .then((results: Song[]) => {
        //enrich with the user that has made the search
        results = results.map(song => {
          song.username = sessionName;
          return song;
        });
        dispatch(searchSongsSuccess(results));
      })
      .catch((err: any) => dispatch(apiCallError()));
  };
}
