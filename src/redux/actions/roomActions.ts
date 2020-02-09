import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import { Playlist, Brand } from "components/common/objectTypes/playlist";
import * as stubData from "../../apiConnection/stubData";

// export function createRoomSuccess(room: Room) {
//   return { type: types.CREATE_ROOM_SUCCESS, room: room };
// }

export function loadRoomSuccess(room: Room) {
  return { type: types.LOAD_ROOM_SUCCESS, room: room };
}

export function setToMaster() {
  return { type: types.IS_MASTER, isMaster: true };
}

export function createRoom() {
  // do some thunk stuff
  //temp solution
  return function(dispatch: any) {
    dispatch(setToMaster());
    dispatch(loadRoomSuccess(stubData.stubCreateRoom));
  };
}

export function loadRoom(pin: string) {
  return function(dispatch: any) {
    dispatch(loadRoomSuccess(stubData.stubCreateRoom));
  };
}
