import * as types from "./actionTypes";

export function createRoomSuccess(room) {
  return { type: types.CREATE_ROOM_SUCCESS, room: room };
}

export function createRoom() {
  // do some thunk stuff
}
