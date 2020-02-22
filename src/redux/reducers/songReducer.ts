import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";
import { Song } from "components/common/objectTypes/song";

type Actions =
  | { type: "LOAD_ROOM_SUCCESS"; room: Room }
  | { type: "ADD_SONG_OPTIMISTIC"; song: Song };

export default function songReducer(
  songsState = initialState.songs,
  action: Actions
) {
  switch (action.type) {
    case types.LOAD_ROOM_SUCCESS:
      return action.room.songs;
    case types.ADD_SONG_OPTIMISTIC:
      return [...songsState, action.song];
    default:
      return songsState;
  }
}
