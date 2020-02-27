import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { Song } from "components/common/objectTypes/song";

type Actions = { type: string; currentlyPlaying: Song };

export default function currentlyPlayingReducer(
  currentlyPlayingState = initialState.currentlyPlaying,
  action: Actions
) {
  switch (action.type) {
    case types.SET_CURRENTLY_PLAYING:
      return action.currentlyPlaying;
    default:
      return currentlyPlayingState;
  }
}
