import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";

type Actions = { type: string; room: Room };

export default function playlistReducer(
  playlistState = initialState.playlist,
  action: Actions
) {
  switch (action.type) {
    case types.LOAD_ROOM_SUCCESS:
      return action.room.playlist;
    default:
      return playlistState;
  }
}
