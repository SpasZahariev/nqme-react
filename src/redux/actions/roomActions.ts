import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import { Playlist, Brand } from "components/common/objectTypes/playlist";
import * as stubData from "../../apiConnection/stubData";
import * as usernameActions from "./usernameActions";

// export function createRoomSuccess(room: Room) {
//   return { type: types.CREATE_ROOM_SUCCESS, room: room };
// }

const HOST: string = "Host";

export function loadRoomSuccess(room: Room) {
  return { type: types.LOAD_ROOM_SUCCESS, room: room };
}

export function createRoom() {
  // do some thunk stuff
  //temp solution
  return function(dispatch: any) {
    dispatch(usernameActions.setSessionName(HOST));
    dispatch(loadRoomSuccess(stubData.stubCreateRoom));
  };
}

export function loadRoom(pin: string) {
  return function(dispatch: any) {
    dispatch(usernameActions.addUser());
    dispatch(loadRoomSuccess(stubData.stubCreateRoom));
  };
}
