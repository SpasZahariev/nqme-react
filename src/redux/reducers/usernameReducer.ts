import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";

type Actions =
  | { type: "LOAD_ROOM_SUCCESS"; room: Room }
  | { type: "LOAD_USERNAMES_SUCCESS"; usernames: string[] };

export default function usernameReducer(
  usernamesState = initialState.usernames,
  action: Actions
) {
  switch (action.type) {
    case types.LOAD_ROOM_SUCCESS:
      return action.room.usernames;
    case types.LOAD_USERNAMES_SUCCESS:
      return action.usernames;
    default:
      return usernamesState;
  }
}
