import { Song } from "components/common/objectTypes/song";
import * as apiMutations from "../../apiConnection/mutations";
import * as apiQueries from "../../apiConnection/queries";
import { Room } from "../../components/common/objectTypes/room";
import * as types from "./actionTypes";
import * as apiStatusActions from "./apiStatusActions";
import * as usernameActions from "./usernameActions";

// import gql from "graphql-tag";

// export function createRoomSuccess(room: Room) {
//   return { type: types.CREATE_ROOM_SUCCESS, room: room };
// }

const HOST: string = "Host";

interface QueryResult {
  data: any;
  loading: any;
  error: any;
}

export function loadRoomSuccess(room: Room) {
  return { type: types.LOAD_ROOM_SUCCESS, room: room };
}

export function addSongOptimistic(song: Song) {
  return { type: types.ADD_SONG_OPTIMISTIC, song: song };
}

export function clearSearchResults() {
  return { type: types.CLEAR_SEARCH_RESULTS };
}

export function likeSongOptimistic(title: string) {
  return { type: types.LIKE_SONG_OPTIMISTIC, title };
}

export function dequeueSongOptimistic() {
  return { type: types.DEQUEUE_SONG_OPTIMISTIC };
}

export function setToLivePlaylist(songs: Song[]) {
  return { type: types.SET_TO_LIVE_PLAYLIST, songs };
}

export function setCurrentlyPlaying(song: Song) {
  return { type: types.SET_CURRENTLY_PLAYING, song };
}

export function removeSongOptimistic(title: string) {
  return { type: types.REMOVE_SONG_OPTIMISTIC, title };
}

export function createRoom(client: any) {
  // do some thunk stuff
  return function(dispatch: any) {
    dispatch(apiStatusActions.beginApiCall());
    dispatch(usernameActions.setSessionName(HOST));
    //start api loading now
    return client
      .mutate({
        mutation: apiMutations.PUT_ROOM
      })
      .then((result: any) => {
        console.log("room created");
        console.log(result);
        dispatch(loadRoomSuccess(result.data.putRoom.room));
      })
      .catch((error: any) => {
        dispatch(apiStatusActions.apiCallError());
        throw error;
      });
  };
}

export function loadRoom(client: any, pinCode: string) {
  return function(dispatch: any) {
    // const client = useApolloClient();

    dispatch(apiStatusActions.beginApiCall());
    // console.log(wrappedPin);
    return client
      .query({
        query: apiQueries.GET_SPECIFIC_ROOM,
        variables: { pinCode }
      })
      .then((result: QueryResult) => {
        //todo remove later
        console.log("here is my result", result);
        console.log(result.data.room);
        const room = result.data.room;
        dispatch(
          usernameActions.setSessionName(
            room.usernames[room.usernames.length - 1]
          )
        );
        dispatch(loadRoomSuccess(room));
      })
      .catch((error: any) => {
        dispatch(apiStatusActions.apiCallError());
        throw error;
      });
  };
}

export function addSongToQueue(client: any, pin: string, song: Song) {
  return function(dispatch: any) {
    dispatch(addSongOptimistic(song));
    dispatch(clearSearchResults());
    const { title, url, username, company } = song;
    return client.mutate({
      mutation: apiMutations.PUT_SONG,
      variables: { pin, title, url, username, company }
    });
  };
}

export function likeSong(client: any, pin: string, title: string) {
  return function(dispatch: any) {
    dispatch(likeSongOptimistic(title));
    return client.mutate({
      mutation: apiMutations.LIKE_SONG,
      variables: { pin, title }
    });
  };
}

export function dequeueSong(client: any, pin: string) {
  return function(dispatch: any) {
    dispatch(dequeueSongOptimistic());
    return client.mutate({
      mutation: apiMutations.DEQUEUE_SONG,
      variables: { pin }
    });
  };
}

export function removeFromQueue(client: any, pin: string, title: string) {
  return function(dispatch: any) {
    dispatch(removeSongOptimistic(title));
    return client.mutate({
      mutation: apiMutations.REMOVE_SONG,
      variables: { pin, title }
    });
  };
}

// client
//   .query({
//     query: apiQueries.GET_ROOMS
//   })
//   .then(result => console.log(result));

// client
//   .query({
//     query: gql`
//       query {
//         room(pin: "1111") {
//           pin
//           usernames
//           songs {
//             title
//             url
//             likes
//             company
//           }
//         }
//       }
//     `
//   })
//   .then((result: any) => console.log(result));

// // const { loading, error, data } = useQuery(apiQueries.GET_SPECIFIC_ROOM, {
// // variables: pin
// // }).then(result => console.log(result));;

// return dispatch(loadRoomSuccess(stubData.stubCreateRoom));
