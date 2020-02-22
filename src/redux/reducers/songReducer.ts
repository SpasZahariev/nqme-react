import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";
import { Song } from "components/common/objectTypes/song";

type Actions =
  | { type: "LOAD_ROOM_SUCCESS"; room: Room }
  | { type: "ADD_SONG_OPTIMISTIC"; song: Song }
  | { type: "LIKE_SONG_OPTIMISTIC"; title: string }
  | { type: "DEQUEUE_SONG_OPTIMISTIC" };

export default function songReducer(
  songsState: Song[] = initialState.songs,
  action: Actions
) {
  switch (action.type) {
    case types.LOAD_ROOM_SUCCESS:
      return action.room.songs;
    case types.ADD_SONG_OPTIMISTIC:
      return [...songsState, action.song];
    case types.LIKE_SONG_OPTIMISTIC:
      //sort playlist in descending like order
      return songsState
        .map(song => {
          //note very cool -> using the spread operator I can update ONLY the likes propery!
          return song.title === action.title
            ? { ...song, likes: song.likes + 1 }
            : song;
        })
        .sort((songA, songB) => songB.likes - songA.likes);
    case types.DEQUEUE_SONG_OPTIMISTIC:
      return songsState.slice(1);
    default:
      return songsState;
  }
}
