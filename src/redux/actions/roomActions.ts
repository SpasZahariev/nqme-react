import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import { Playlist, Brand } from "components/common/objectTypes/playlist";

//temporary
const stubPlaylist: Playlist = {
  songs: [
    {
      title: "title1",
      url: "url1",
      likes: 0,
      username: "spas1",
      company: Brand.YOUTUBE
    },
    {
      title: "title2",
      url: "url2",
      likes: 1,
      username: "spas2",
      company: Brand.SPOTIFY
    }
  ]
};

//temporary
const stubCreateRoom: Room = {
  pin: String(Math.floor(Math.random() * 10000 + 1)),
  usernames: ["spas", "psas2", "spas3", "spas1"],
  playlist: stubPlaylist
};

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
    dispatch(loadRoomSuccess(stubCreateRoom));
  };
}

export function loadRoom(pin: string) {
  return function(dispatch: any) {
    dispatch(loadRoomSuccess(stubCreateRoom));
  };
}
