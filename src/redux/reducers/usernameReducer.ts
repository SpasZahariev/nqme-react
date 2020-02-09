import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";

type Actions = { type: string; room: Room };

export default function usernameReducer(
  usernamesState = initialState.usernames,
  action: Actions
) {
  switch (action.type) {
    case types.LOAD_ROOM_SUCCESS:
      return action.room.usernames;
    default:
      return usernamesState;
  }
}
